# :sparkles:@2030/commitlint-config

## :fire:风格说明 

- 标题不能为空且不得超过72个字符
- 规范标准提交类型
- 可选Scope强制规则
- 默认提交类型
  - 'feat'     // 新增功能/特性
  - 'fix'      // 修复BUG/问题
  - 'upd'      // 更新某功能
  - 'docs'     // 变更文档/注释
  - 'style'    // 调整代码格式(不影响
  - 'refactor' // 重构代码(不包括修复BUG/新增功能)
  - 'perf'     // 优化/性能提升
  - 'test'     // 测试(用例)相关
  - 'workflow' // 构建流程/工具变更(修改打包配置等)
  - 'ci'       // 持续集成
  - 'revert'   // 回滚提交
  - 'merge'    // 合并分支
  - 'chore'    // 依赖更新/脚手架配置修改
  - 'wip'      // 开发中
  - 'mod'      // 不确定分类的修改

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
> - `@2030/commitlint-config-plus` 强制scope规则
> - 想要配置scope为必填，只需以下配置的中的 `@2030` 替换 `@2030/commitlint-config-plus` 即可

- `.commitlintrc.json` 配置:
  ```json
  {
    "extends": ["@2030"],
  }
  ```
- `.commitlintrc.yml` 配置:
  ```yaml
  extends: "@2030"
  ```
- `.commitlintrc.js` 配置:
  ```javascript
  module.exports = {
    extends: ["@2030"]
  }
  ```
  

### 3. 添加 `husky` hook - `commit-msg`

Husky V8 代码示例:

```bash
# husky初始化
pnpm dlx husky-init
# 安装依赖,默认添加 pre-commit 钩子，可选择注释内容
pnpm install
```
- 非window端添加 `commit-msg` 钩子
  ```bash
  npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
  ```
- window端添加 `commit-msg` 钩子
  ```bash
  node node_modules/husky/lib/bin add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
  ```

## :key:License

[MIT](./LICENSE) License &copy; 2022 ZiJun
