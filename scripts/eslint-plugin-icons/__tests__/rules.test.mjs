import { RuleTester } from 'eslint';

import plugin from '../index.mjs';

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 'latest',
    parserOptions: { ecmaFeatures: { jsx: true } },
    sourceType: 'module',
  },
});

const COLOR = 'src/Acme/components/Color.tsx';
const MONO = 'src/Acme/components/Mono.tsx';
const TEXT = 'src/Acme/components/Text.tsx';
const TEXT_CN = 'src/Acme/components/TextCn.tsx';
const BRAND = 'src/Acme/components/BrandColor.tsx';

const icon = (attrs, body = '<path d="M0 0h24v24H0z" />') =>
  `const Icon = ({ size, ...rest }) => (<svg ${attrs} {...rest}>${body}</svg>);`;

ruleTester.run('icons/brand-viewbox', plugin.rules['brand-viewbox'], {
  invalid: [
    {
      code: icon('height={size} viewBox="0 0 64 64" width={size}'),
      errors: [{ messageId: 'wrong' }],
      filename: COLOR,
    },
    {
      code: icon('height={size} viewBox="0 0 33 32" width={size}'),
      errors: [{ messageId: 'wrong' }],
      filename: MONO,
    },
    {
      code: icon('height={size} width={size}'),
      errors: [{ messageId: 'missing' }],
      filename: MONO,
    },
    { code: icon('viewBox={box}'), errors: [{ messageId: 'dynamic' }], filename: COLOR },
  ],
  valid: [
    { code: icon('height={size} viewBox="0 0 24 24" width={size}'), filename: COLOR },
    { code: icon("viewBox={'0 0 24 24'}"), filename: MONO },
    // nested <svg> elements are not the component root
    { code: icon('viewBox="0 0 24 24"', '<svg viewBox="0 0 10 10" />'), filename: MONO },
    // wordmarks are checked by icons/text-viewbox instead
    { code: icon('height={size} viewBox="0 0 97 24"'), filename: TEXT },
    { code: icon('height={size} viewBox="0 0 90 24"'), filename: BRAND },
    // components without an <svg> (Avatar, Combine) are ignored
    {
      code: 'const Avatar = (p) => <IconAvatar Icon={Mono} {...p} />;',
      filename: 'src/Acme/components/Avatar.tsx',
    },
  ],
});

ruleTester.run('icons/text-viewbox', plugin.rules['text-viewbox'], {
  invalid: [
    {
      code: icon('height={size} viewBox="0 0 237 42"'),
      errors: [{ messageId: 'wrongViewBox' }],
      filename: TEXT,
    },
    {
      code: icon('height={size} viewBox="0 0 24 97"'),
      errors: [{ messageId: 'wrongViewBox' }],
      filename: TEXT_CN,
    },
    {
      code: icon('height={size} viewBox="0 0 97 24" width={size}'),
      errors: [{ messageId: 'width' }],
      filename: TEXT,
    },
    {
      code: icon('height="1em" viewBox="0 0 97 24"'),
      errors: [{ messageId: 'height' }],
      filename: TEXT,
    },
    { code: icon('viewBox="0 0 97 24"'), errors: [{ messageId: 'height' }], filename: BRAND },
    { code: icon('height={size}'), errors: [{ messageId: 'missingViewBox' }], filename: TEXT },
    {
      code: icon('height={size} viewBox={box}'),
      errors: [{ messageId: 'dynamicViewBox' }],
      filename: TEXT,
    },
  ],
  valid: [
    { code: icon('height={size} viewBox="0 0 97 24"'), filename: TEXT },
    { code: icon('height={size} viewBox="0 0 135.429 24"'), filename: TEXT_CN },
    { code: icon('height={size} viewBox="0 0 90 24"'), filename: BRAND },
    // square brand icons are checked by icons/brand-viewbox instead
    { code: icon('height={size} viewBox="0 0 24 24" width={size}'), filename: COLOR },
  ],
});

ruleTester.run('icons/no-hardcoded-svg-id', plugin.rules['no-hardcoded-svg-id'], {
  invalid: [
    {
      code: icon(
        '',
        '<g clipPath="url(#a)"><path /></g><defs><clipPath id="a"><path /></clipPath></defs>',
      ),
      errors: [{ messageId: 'hardcodedUrl' }, { messageId: 'hardcodedId' }],
      filename: TEXT,
    },
    {
      code: icon('', '<path fill="url(#grad)" /><linearGradient id={"grad"} />'),
      errors: [{ messageId: 'hardcodedUrl' }, { messageId: 'hardcodedId' }],
      filename: COLOR,
    },
    {
      code: icon('', '<mask id={`m`} /><filter id="f" /><radialGradient id="r" />'),
      errors: [
        { messageId: 'hardcodedId' },
        { messageId: 'hardcodedId' },
        { messageId: 'hardcodedId' },
      ],
      filename: COLOR,
    },
    {
      code: `const Icon = () => { const id = makeId(); return <svg><mask id={id} /></svg>; };`,
      errors: [{ messageId: 'untrackedId' }],
      filename: COLOR,
    },
    {
      code: icon('', '<path style={{ fill: `url(#static)` }} />'),
      errors: [{ messageId: 'hardcodedUrl' }],
      filename: COLOR,
    },
  ],
  valid: [
    {
      code: `const Icon = () => { const { fill, id } = useFillId(TITLE); return <svg><g clipPath={fill} /><clipPath id={id} /></svg>; };`,
      filename: MONO,
    },
    {
      code: `const Icon = () => { const a = useFillId(TITLE); return <svg><path fill={a.fill} /><linearGradient id={a.id} /></svg>; };`,
      filename: COLOR,
    },
    {
      code: `const Icon = () => { const [a, b] = useFillIds(TITLE, 2); return <svg><mask id={a.id} /><filter id={b.id} /></svg>; };`,
      filename: COLOR,
    },
    {
      code: `const Icon = () => { const ids = useFillIds(TITLE, 2); return <svg><radialGradient id={ids[1].id} /></svg>; };`,
      filename: COLOR,
    },
    // the hook's own `url(#${id})` template is fine
    { code: 'const fill = `url(#${id})`;', filename: COLOR },
    // ids on other elements are out of scope
    { code: icon('', '<path id="logo" />'), filename: COLOR },
  ],
});
