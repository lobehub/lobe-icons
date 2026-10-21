import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const FORMATTABLE_FILE = /\.[cm]?[jt]sx?$/;

/**
 * 展开目录，收集需要格式化的源码文件
 */
const collectFiles = (paths: string[]): string[] => {
  const files: string[] = [];

  for (const path of paths) {
    if (!existsSync(path)) continue;

    if (statSync(path).isDirectory()) {
      files.push(...collectFiles(readdirSync(path).map((name) => join(path, name))));
    } else if (FORMATTABLE_FILE.test(path)) {
      files.push(path);
    }
  }

  return files;
};

/**
 * 使用仓库本地安装的 CLI，避免 npx 解析到其他版本
 */
const resolveBin = (projectRoot: string, name: string): string => {
  const bin = join(projectRoot, 'node_modules', '.bin', name);
  if (!existsSync(bin)) {
    throw new Error(`找不到本地 ${name}（${bin}），请先运行 pnpm install`);
  }
  return bin;
};

/**
 * 格式化转换器生成的文件：先 prettier 再 eslint --fix（与 lint-staged 顺序一致）。
 * 规则完全来自仓库自身的 prettier / eslint 配置（按文件路径解析），不在这里硬编码风格。
 * 任一步骤失败都会抛出错误。
 */
export const formatGeneratedFiles = (projectRoot: string, paths: string[]): string[] => {
  const files = [...new Set(collectFiles(paths))].map((file) => relative(projectRoot, file)).sort();

  if (files.length === 0) return files;

  const run = (name: string, args: string[]) => {
    execFileSync(resolveBin(projectRoot, name), [...args, ...files], {
      cwd: projectRoot,
      shell: process.platform === 'win32',
      stdio: 'inherit',
    });
  };

  run('prettier', ['--write', '--log-level', 'warn']);
  run('eslint', ['--fix']);

  return files;
};
