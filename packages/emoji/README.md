# :sparkles:@2030/commitlint-config-emoji

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
    '🎉 init',           // 初次提交
    '🚧 work',           // 工作进行中
    '👔 work',           // 添加/更新业务逻辑
    '✨ feat',           // 添加新功能
    '💥 feat',           // 引入重大改变
    '🐛 fix',            // 修复BUG
    '🩹 fix',            // 简单修复非关键性问题
    '🚑 fix',            // 紧急热修复
    '🔒️ fix',            // 修复安全/隐私问题
    '🚨 fix',            // 修复编译错误/警告
    '✏️ typos',          // 修复拼写错误/错别字
    '💄 style',          // 添加/更新UI样式文件
    '🎨 style',          // 改进项目结构/代码格式
    '📝 docs',           // 添加/更新文档
    '🔧 config',         // 添加/修改配置文件
    '💡 comment',        // 添加/更新注释
    '🚚 rename',         // 移动/重命名文件/路径
    '🔥 chore',          // 添加/删除代码/文件
    '📌 chore',          // 固定依赖版本
    '➕ chore',          // 添加依赖
    '➖ chore',          // 删除依赖
    '⬆️ chore',           // 升级依赖
    '⬇️ chore',           // 降级依赖
    '⚡️ perf',           // 优化性能
    '🗑️ perf',           // 删除无用代码
    '🔊 log',            // 添加/更新日志
    '🔇 log',            // 删除日志
    '♻️ refactor',       // 重构代码
    '🧪 test',           // 添加/修改测试用例
    '🦺 test',           // 添加/更新验证相关代码
    '🚀 build',          // 构建/部署功能
    '🔖 release',        // 发行版本标签
    '🌐 i18n',            // 国际化
    '⏪ revert',         // 回滚提交
    '🔀 merge',          // 合并分支
    '👥 contributor',    // 添加/更新贡献者
    '🏷️ types',          // 类型声明或修改
  ]
  ```

## :bulb:使用说明

### 1. 安装
- `npm` 安装:
  ```bash
  > npm i -D @commitlint/cli @2030/commitlint-config-emoji
  ```
- `yarn` 安装:
  ```bash
  > yarn add -D @commitlint/cli @2030/commitlint-config-emoji
  ```
- `pnpm` 安装:
  ```bash
  > pnpm add -D @commitlint/cli @2030/commitlint-config-emoji
  ```

### 2. 项目根目录配置
- `.commitlintrc.json` 配置:
  ```json
  {
    "extends": ["@2030/commitlint-config-emoji"]
  }
  ```
- `.commitlintrc.yml` 配置:
  ```yaml
  extends: "@2030/commitlint-config-emoji"
  ```
- `.commitlintrc.js` 配置:
  ```javascript
  module.exports = {
    extends: ["@2030/commitlint-config-emoji"]
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

[MIT](/LICENSE) License &copy; 2022 ZiJun
