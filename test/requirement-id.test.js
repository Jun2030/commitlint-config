import { mkdtemp, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const repoRoot = path.dirname(fileURLToPath(new URL('../package.json', import.meta.url)));
const commitlintCli = path.join(repoRoot, 'node_modules', '@commitlint', 'cli', 'cli.js');

async function runCommitlint(configModule, message) {
  const cwd = await mkdtemp(path.join(tmpdir(), 'commitlint-config-'));
  const messagePath = path.join(cwd, 'COMMIT_EDITMSG');

  await writeFile(messagePath, message, 'utf8');

  try {
    const { stdout, stderr } = await execFileAsync(
      process.execPath,
      [commitlintCli, '--config', configModule, '--edit', messagePath],
      { cwd: repoRoot },
    );
    return { code: 0, stdout, stderr };
  } catch (error) {
    return {
      code: error.code,
      stdout: error.stdout,
      stderr: error.stderr,
    };
  }
}

test('root config requires a requirement id in the header', async () => {
  const result = await runCommitlint(path.join(repoRoot, 'index.js'), 'feat: add checkout flow');

  assert.equal(result.code, 1);
  assert.match(result.stdout, /提交标题必须携带需求ID\(e\.g\. ##01234\)/);
});

test('root config accepts a requirement id in the header', async () => {
  const result = await runCommitlint(path.join(repoRoot, 'index.js'), 'feat: add checkout flow #2345');

  assert.equal(result.code, 0);
});

test('emoji config requires a requirement id in the header', async () => {
  const result = await runCommitlint(
    path.join(repoRoot, 'packages', 'emoji', 'index.js'),
    '🐛 fix: patch payment retry',
  );

  assert.equal(result.code, 1);
  assert.match(result.stdout, /提交标题必须携带需求ID\(e\.g\. ##01234\)/);
});
