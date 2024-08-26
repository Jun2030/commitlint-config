# :sparkles:@2030/commitlint-config

![npm](https://img.shields.io/npm/v/@2030/commitlint-config)
![NPM](https://img.shields.io/npm/l/@2030/commitlint-config)
![GitHub top language](https://img.shields.io/github/languages/top/Jun2030/commitlint-config)
![npm bundle size](https://img.shields.io/bundlephobia/min/@2030/commitlint-config)
![npm](https://img.shields.io/npm/dt/@2030/commitlint-config)

> 代码提交规则标准规范

## :fire:风格说明 

- 标题不能为空且不得超过108个字符
- 可选Scope
- 规范标准提交类型
- 可配合名称seatonjiang.gitmoji-vscode使用
- 默认提交类型
  ```javascript
  [
    'init',               // 初次提交
    'work',               // 工作进行中
    'feat',               // 添加新功能
    'fix',                // 修复BUG/问题
    'typos',              // 修改错别字
    'style',              // 改进项目结构/代码格式
    'docs',               // 添加/更新问答
    'config',             // 添加/修改配置文件
    'comments',           // 添加/更新注释
    'rename',             // 移动/重命名文件/路径
    'chore',              // 添加/删除代码/文件
    'perf',               // 优化性能
    'log',                // 添加/更新日志
    'refactor',           // 重构代码
    'test',               // 添加/修改测试用例
    'build',              // 构建/部署流程
    'release',            // 发布新版本
    'i18n',               // 国际化
    'revert',             // 回滚提交
    'merge',              // 合并分支
    'contributor',        // 添加贡献者
    'types',              // 类型声明或修改
  ]
  ```

## :bulb:使用说明

### 1. 安装
- `npm` 安装:
  ```bash
  > npm i -D @commitlint/cli @2030/commitlint-config
  ```
- `yarn` 安装:
  ```bash
  > yarn add -D @commitlint/cli @2030/commitlint-config
  ```
- `pnpm` 安装:
  ```bash
  > pnpm add -D @commitlint/cli @2030/commitlint-config
  ```

### 2. 项目根目录配置

> - `@2030` 基本规则
> - `@2030/commitlint-config-emoji` 强制使用emoji规则

- `.commitlintrc.json` 配置:
  ```json
  {
    "extends": ["@2030/commitlint-config"],
  }
  ```
- `.commitlintrc.yml` 配置:
  ```yaml
  extends: "@2030/commitlint-config"
  ```
- `.commitlintrc.js` 配置:
  ```javascript
  module.exports = {
    extends: ["@2030/commitlint-config"]
  }
  ```


### 3. 添加 `husky` hook - `commit-msg`

Husky V8 代码示例:

```bash
# husky初始化
pnpm exec husky init
```
- 添加 `commit-msg` 钩子
  ```bash
  echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
  ```

## :key:License

[MIT](./LICENSE) License &copy; 2024 ZiJun
