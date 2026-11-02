import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import ts from 'typescript';

const { dirname, join, relative, resolve } = path;

const packageDir = fileURLToPath(new URL('..', import.meta.url));
const root = resolve(packageDir, '../..');
const sourceDir = join(root, 'src');
const sources = new Map<string, string>();
const read = (path: string) => readFileSync(join(sourceDir, path), 'utf8');
const icons = read('icons.ts');
const brands = [...icons.matchAll(/from '\.\/([^']+)'/g)].map((match) => match[1]);
if (!brands.length) throw new Error('No brands found in src/icons.ts');

function collect(directory: string, prefix = '') {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const name = `${prefix}${entry.name}`;
    if (entry.isDirectory()) collect(join(directory, entry.name), `${name}/`);
    else if (/\.tsx?$/.test(name)) {
      sources.set(name.replace(/\.tsx$/, '.ts'), readFileSync(join(directory, entry.name), 'utf8'));
    }
  }
}

for (const brand of brands) {
  sources.set(`${brand}/index.ts`, read(`${brand}/index.ts`));
  sources.set(`${brand}/style.ts`, read(`${brand}/style.ts`));
  collect(join(sourceDir, brand, 'components'), `${brand}/components/`);
}

for (const file of [
  'index.ts',
  'features/index.ts',
  'features/modelConfig.ts',
  'features/agentConfig.ts',
  'features/providerConfig.tsx',
  'features/providerEnum.ts',
  'types/toc.ts',
  'features/getLobeIconCDN/index.tsx',
  'features/ModelIcon/index.tsx',
  'features/ProviderIcon/index.tsx',
  'features/AgentIcon/index.tsx',
  'features/ProviderCombine/index.tsx',
  'features/ProviderCombine/Combine.tsx',
])
  sources.set(file.replace(/\.tsx$/, '.ts'), read(file));

sources.set('icons.ts', icons);
sources.set(
  'toc.ts',
  `import type { IconToc } from './types/toc';\nexport type { IconToc } from './types/toc';\nexport const toc: IconToc[] = ${read('toc.json')};\n`,
);

for (const feature of ['ModelIcon', 'ProviderIcon', 'AgentIcon']) {
  sources.set(`features/${feature}/DefaultIcon.ts`, "export { default } from '../DefaultIcon';");
  sources.set(
    `features/${feature}/DefaultAvatar.ts`,
    "export { default } from '../DefaultAvatar';",
  );
}
// Handwritten Vue primitives replace React-specific layout and UI dependencies.
collect(join(packageDir, 'src'));

const f = ts.factory;
const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
const identifier = f.createIdentifier;
const string = f.createStringLiteral;
const pureComment = (node: ts.Expression) =>
  ts.addSyntheticLeadingComment(node, ts.SyntaxKind.MultiLineCommentTrivia, '#__PURE__', false);

function modulePath(from: string, specifier: string) {
  if (specifier === 'vue' || specifier === 'es-toolkit') return specifier;
  const target = specifier.startsWith('@/')
    ? specifier.slice(2)
    : relative('.', join(dirname(from), specifier)).replaceAll('\\', '/');
  const resolved = [target, `${target}.ts`, `${target}/index.ts`].find((path) => sources.has(path));
  if (!resolved) throw new Error(`Unsupported dependency ${specifier} in ${from}`);
  const path = relative(dirname(from), resolved).replaceAll('\\', '/').replace(/\.ts$/, '.js');
  return path.startsWith('.') ? path : `./${path}`;
}

// React and Vue both use JSX syntax, but their VNodes and component lifecycle
// differ. Convert the AST to Vue render calls rather than copying JSX at runtime.
function convert(name: string, content: string) {
  const source = ts.createSourceFile(
    name.replace(/\.ts$/, '.tsx'),
    content,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  let usesJsx = false;
  let usesMapping = false;
  let usesStyle = false;
  const transform: ts.TransformerFactory<ts.SourceFile> = (context) => {
    const visit: ts.Visitor = (node) => {
      if (
        ts.isExpressionStatement(node) &&
        ts.isStringLiteral(node.expression) &&
        node.expression.text === 'use client'
      )
        return undefined;
      if (ts.isImportDeclaration(node)) {
        const specifier = (node.moduleSpecifier as ts.StringLiteral).text;
        if (specifier === 'react' || specifier === '@lobehub/ui') {
          const imports = node.importClause?.namedBindings;
          if (!imports || !ts.isNamedImports(imports))
            throw new Error(`Unsupported import in ${name}`);
          const grouped = new Map<string, ts.ImportSpecifier[]>();
          for (const item of imports.elements) {
            const imported = (item.propertyName || item.name).text;
            if (imported === 'useMemo' || imported === 'FC') continue;
            const replacements: Record<string, [string, string]> = {
              memo: ['./runtime', 'defineIcon'],
              CSSProperties: ['vue', 'CSSProperties'],
              ReactNode: ['vue', 'VNodeChild'],
              DivProps: ['./types', 'DivProps'],
              FlexboxProps: ['./types', 'FlexboxProps'],
              Flexbox: ['./layout', 'Flexbox'],
              Divider: ['./layout', 'Divider'],
            };
            const replacement = replacements[imported];
            if (!replacement)
              throw new Error(`Unsupported ${specifier} import ${imported} in ${name}`);
            const [target, symbol] = replacement;
            const path = target.startsWith('.') ? modulePath(name, `@/${target.slice(2)}`) : target;
            const elements = grouped.get(path) || [];
            elements.push(
              f.createImportSpecifier(
                item.isTypeOnly || !!node.importClause?.isTypeOnly,
                symbol === item.name.text ? undefined : identifier(symbol),
                item.name,
              ),
            );
            grouped.set(path, elements);
          }
          return [...grouped].map(([path, elements]) =>
            f.createImportDeclaration(
              undefined,
              f.createImportClause(false, undefined, f.createNamedImports(elements)),
              string(path),
            ),
          );
        }
        return f.updateImportDeclaration(
          node,
          node.modifiers,
          node.importClause,
          string(modulePath(name, specifier)),
          node.attributes,
        );
      }
      if (ts.isExportDeclaration(node) && node.moduleSpecifier) {
        return f.updateExportDeclaration(
          node,
          node.modifiers,
          node.isTypeOnly,
          node.exportClause,
          string(modulePath(name, (node.moduleSpecifier as ts.StringLiteral).text)),
          node.attributes,
        );
      }
      if (
        ts.isTypeAliasDeclaration(node) &&
        /^(?:Model|Provider|Agent)IconType$/.test(node.name.text)
      ) {
        usesMapping = true;
        return f.updateTypeAliasDeclaration(
          node,
          node.modifiers,
          node.name,
          node.typeParameters,
          f.createTypeReferenceNode('MappingIcon'),
        );
      }
      if (
        ts.isTypeReferenceNode(node) &&
        ts.isIdentifier(node.typeName) &&
        node.typeName.text === 'FC'
      ) {
        usesMapping = true;
        return f.createTypeReferenceNode('ComponentType', node.typeArguments);
      }
      if (
        ts.isSpreadAssignment(node) &&
        ((ts.isIdentifier(node.expression) && node.expression.text === 'style') ||
          (ts.isPropertyAccessExpression(node.expression) && node.expression.name.text === 'style'))
      ) {
        usesStyle = true;
        return f.createSpreadAssignment(
          f.createCallExpression(identifier('__style'), undefined, [node.expression]),
        );
      }
      if (ts.isCallExpression(node) && ts.isIdentifier(node.expression)) {
        if (node.expression.text === 'useMemo') {
          return f.createCallExpression(
            f.createParenthesizedExpression(
              ts.visitNode(node.arguments[0], visit) as ts.Expression,
            ),
            undefined,
            [],
          );
        }
        if (node.expression.text === 'memo') {
          const callback = node.arguments[0];
          if (!ts.isArrowFunction(callback)) throw new Error(`Unsupported component in ${name}`);
          const setupStatements: ts.Statement[] = [];
          let body = callback.body;
          if (ts.isBlock(body)) {
            const statements = body.statements.filter((statement) => {
              if (!ts.isVariableStatement(statement)) return true;
              const hooks = statement.declarationList.declarations.filter(
                (declaration) =>
                  declaration.initializer &&
                  ts.isCallExpression(declaration.initializer) &&
                  ts.isIdentifier(declaration.initializer.expression) &&
                  /^useFillIds?$/.test(declaration.initializer.expression.text),
              );
              if (!hooks.length) return true;
              if (hooks.length !== statement.declarationList.declarations.length)
                throw new Error(`Mixed hook declaration in ${name}`);
              setupStatements.push(statement);
              return false;
            });
            body = f.updateBlock(body, statements);
          }
          const render = ts.visitNode(
            f.updateArrowFunction(
              callback,
              callback.modifiers,
              callback.typeParameters,
              callback.parameters,
              callback.type,
              callback.equalsGreaterThanToken,
              body,
            ),
            visit,
          ) as ts.Expression;
          const setup = f.createArrowFunction(
            undefined,
            undefined,
            [],
            undefined,
            f.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
            setupStatements.length
              ? f.createBlock([...setupStatements, f.createReturnStatement(render)], true)
              : render,
          );
          return pureComment(
            f.updateCallExpression(node, node.expression, node.typeArguments, [setup]),
          );
        }
      }
      if (ts.isJsxElement(node) || ts.isJsxSelfClosingElement(node) || ts.isJsxFragment(node)) {
        usesJsx = true;
        const opening = ts.isJsxElement(node)
          ? node.openingElement
          : ts.isJsxSelfClosingElement(node)
            ? node
            : undefined;
        const tagName = opening?.tagName;
        const tag = !tagName
          ? identifier('__Fragment')
          : ts.isIdentifier(tagName) && /^[a-z]/.test(tagName.text)
            ? string(tagName.text)
            : tagName;
        const properties =
          opening?.attributes.properties.map((attribute) => {
            if (ts.isJsxSpreadAttribute(attribute))
              return f.createSpreadAssignment(
                ts.visitNode(attribute.expression, visit) as ts.Expression,
              );
            const value = !attribute.initializer
              ? f.createTrue()
              : ts.isStringLiteral(attribute.initializer)
                ? string(attribute.initializer.text)
                : (ts.visitNode(
                    ts.isJsxExpression(attribute.initializer)
                      ? attribute.initializer.expression!
                      : attribute.initializer,
                    visit,
                  ) as ts.Expression);
            return f.createPropertyAssignment(string(attribute.name.getText(source)), value);
          }) || [];
        const children: ts.Expression[] = [];
        if (!ts.isJsxSelfClosingElement(node))
          for (const child of node.children) {
            if (ts.isJsxText(child)) {
              const text = child.text
                .split(/\r?\n/)
                .map((line, index, lines) => {
                  const trimmed = line.replaceAll('\t', ' ');
                  return (index ? trimmed.replace(/^ +/, '') : trimmed).replace(
                    index < lines.length - 1 ? / +$/ : /$^/,
                    '',
                  );
                })
                .filter(Boolean)
                .join(' ');
              if (text) children.push(string(text));
            } else if (ts.isJsxExpression(child)) {
              if (child.expression)
                children.push(ts.visitNode(child.expression, visit) as ts.Expression);
            } else children.push(ts.visitNode(child, visit) as ts.Expression);
          }
        return f.createCallExpression(identifier('__h'), undefined, [
          tag as ts.Expression,
          properties.length ? f.createObjectLiteralExpression(properties) : f.createNull(),
          f.createArrayLiteralExpression(children),
        ]);
      }
      return ts.visitEachChild(node, visit, context);
    };
    return (node) => ts.visitNode(node, visit) as ts.SourceFile;
  };
  const result = ts.transform(source, [transform]);
  const imports = [
    usesJsx
      ? `import { createIconNode as __h, Fragment as __Fragment } from '${modulePath(name, '@/runtime')}';`
      : '',
    usesMapping
      ? `import type { MappingIcon, ComponentType } from '${modulePath(name, '@/types')}';`
      : '',
    usesStyle
      ? `import { normalizeIconStyle as __style } from '${modulePath(name, '@/runtime')}';`
      : '',
  ]
    .filter(Boolean)
    .join('\n');
  const output = `// Generated from the shared icon sources. Do not edit.\n${imports}\n${printer.printFile(result.transformed[0])}`;
  result.dispose();
  return output;
}

// Validate every dependency before replacing the previous build.
const generated = new Map([...sources].map(([name, content]) => [name, convert(name, content)]));
for (const directory of [
  '.generated',
  ...(process.argv.includes('--clean-dist') ? ['dist'] : []),
]) {
  const path = resolve(packageDir, directory);
  if (dirname(path) !== resolve(packageDir)) throw new Error(`Unsafe output path: ${path}`);
  rmSync(path, { recursive: true, force: true });
}
for (const [name, content] of generated) {
  const path = join(packageDir, '.generated', name);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content);
}
console.info(`Generated ${brands.length} Vue icon families (${generated.size} modules).`);
