# 开发文档

## 项目简介

`@2030/commitlint-config` 是一个可共享的 commitlint 配置包，用于强制执行约定式提交规范。项目采用 pnpm workspace 管理 monorepo 结构，提供了两种配置方案：

- **@2030/commitlint-config**: 基础配置，支持标准化的提交类型
- **@2030/commitlint-config-emoji**: Emoji 配置，在提交类型前强制使用表情符号

## 技术栈

- **运行时**: Node.js (ESM 模块)
- **包管理器**: pnpm (workspace)
- **核心依赖**:
  - `@commitlint/cli`: commitlint 命令行工具
  - `@commitlint/config-conventional`: 约定式提交的基础规则
  - `commitlint-config-git-commit-emoji`: Emoji 提交规则
- **开发工具**:
  - `husky`: Git hooks 管理
  - `bumpp`: 版本发布工具

## 项目结构

```
commitlint-config/
├── packages/
│   └── emoji/                      # Emoji 配置子包
│       ├── index.js                # Emoji 规则配置
│       ├── package.json            # 子包配置
│       └── README.md               # 子包文档
├── .husky/
│   └── commit-msg                  # Git commit 钩子
├── .editorconfig                   # 编辑器配置
├── .gitignore                      # Git 忽略文件
├── index.js                        # 主配置文件
├── package.json                    # 主包配置
├── pnpm-lock.yaml                  # 依赖锁文件
├── pnpm-workspace.yaml             # workspace 配置
└── README.md                       # 项目说明文档
```

## 开发环境配置

### 1. 环境要求

- Node.js >= 20
- pnpm >= 10.0.0

### 2. 克隆项目

```bash
git clone https://github.com/Jun2030/commitlint-config.git
cd commitlint-config
```

### 3. 安装依赖

```bash
pnpm install
```

安装完成后，`husky` 会通过 `prepare` 脚本自动初始化。

## 核心配置说明

### 主配置 (index.js)

位于项目根目录的 `index.js` 定义了基础的提交规范：

```javascript
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 标题最大长度 200 个字符
    'header-max-length': [2, 'always', 200],
    // <body> 内容以空行开始
    'body-leading-blank': [2, 'always'],
    // <footer> 结尾以空行开始
    'footer-leading-blank': [2, 'always'],
    // <scope> 放开大小写 (禁用检查)
    'scope-case': [0],
    // type 必须小写
    'type-case': [2, 'always', 'lower-case'],
    // 支持的提交类型
    'type-enum': [2, 'always', [
      'init', 'work', 'feat', 'fix', 'typos', 'style',
      'docs', 'config', 'comments', 'rename', 'chore',
      'perf', 'log', 'refactor', 'test', 'build',
      'release', 'i18n', 'revert', 'merge', 'contributor',
      'types', 'ci'
    ]]
  }
}
```

#### 规则级别说明

- `0`: 禁用规则
- `1`: 警告（不会阻止提交）
- `2`: 错误（会阻止提交）

### Emoji 配置 (packages/emoji/index.js)

Emoji 配置扩展了基础配置，要求在提交类型前添加表情符号：

```javascript
export default {
  extends: ['git-commit-emoji'],
  rules: {
    // ... 继承主配置的规则
    'type-enum': [2, 'always', [
      '🎉 init',      // 初次提交
      '✨ feat',      // 添加新功能
      '🐛 fix',       // 修复BUG
      // ... 更多 emoji 类型
    ]]
  }
}
```

## 提交规范

### 提交消息格式

```
type(scope?): subject

body?

footer?
```

- **type**: 提交类型（必填）
- **scope**: 影响范围（可选，不限制大小写）
- **subject**: 简短描述（必填，不超过200字符）
- **body**: 详细描述（可选，前面需要空行）
- **footer**: 备注信息（可选，前面需要空行）

### 提交类型说明

| 类型 | 说明 | Emoji 版本 |
|------|------|------------|
| `init` | 初次提交 | 🎉 init |
| `work` | 工作进行中 | 🚧 work / 👔 work |
| `feat` | 添加新功能 | ✨ feat / 💥 feat |
| `fix` | 修复BUG | 🐛 fix / 🩹 fix / 🚑 fix |
| `typos` | 修改错别字 | ✏️ typos |
| `style` | 改进项目结构/代码格式 | 🎨 style / 💄 style |
| `docs` | 添加/更新文档 | 📝 docs |
| `config` | 添加/修改配置文件 | 🔧 config |
| `comments` | 添加/更新注释 | 💡 comment |
| `rename` | 移动/重命名文件/路径 | 🚚 rename |
| `chore` | 添加/删除代码/文件 | 🔥 chore / ➕ chore |
| `perf` | 优化性能 | ⚡️ perf |
| `log` | 添加/更新日志 | 🔊 log / 🔇 log |
| `refactor` | 重构代码 | ♻️ refactor |
| `test` | 添加/修改测试用例 | 🧪 test |
| `build` | 构建/部署流程 | 🚀 build |
| `release` | 发布新版本 | 🔖 release |
| `i18n` | 国际化 | 🌐 i18n |
| `revert` | 回滚提交 | ⏪ revert |
| `merge` | 合并分支 | 🔀 merge |
| `contributor` | 添加贡献者 | 👥 contributor |
| `types` | 类型声明或修改 | 🏷️ types |
| `ci` | 持续集成 | 👷‍♂️ ci |

### 提交示例

**基础配置示例**:
```bash
feat: 添加用户登录功能
feat(auth): 实现JWT认证
fix(api): 修复接口返回数据格式错误
docs: 更新开发文档
```

**Emoji 配置示例**:
```bash
✨ feat: 添加用户登录功能
🐛 fix(api): 修复接口返回数据格式错误
📝 docs: 更新开发文档
```

## 开发工作流

### 1. 创建分支

```bash
git checkout -b feature/your-feature-name
```

### 2. 开发与提交

进行代码修改后：

```bash
git add .
git commit -m "feat: 添加新功能"
```

提交时会自动触发 commitlint 校验，不符合规范的提交会被拒绝。

### 3. 测试配置

在本地测试配置是否生效：

```bash
# 测试基础配置
echo "feat: test commit" | npx commitlint --config index.js

# 测试 emoji 配置
echo "✨ feat: test commit" | npx commitlint --config packages/emoji/index.js
```

### 4. 版本发布

使用 `bumpp` 自动管理版本：

```bash
# 发布新版本（自动更新版本号、创建 commit 和 tag、推送）
pnpm release
```

该命令会：
- 交互式选择版本号（patch/minor/major）
- 同步更新主包和子包的版本号
- 创建 release commit
- 创建 git tag
- 推送到远程仓库

## 本地测试

### 测试主配置包

在其他项目中测试主配置：

```bash
# 在测试项目中
pnpm add -D @commitlint/cli file:/path/to/commitlint-config

# 创建配置文件 .commitlintrc.json
{
  "extends": ["@2030/commitlint-config"]
}

# 测试提交
git commit -m "test: 测试提交"
```

### 测试 Emoji 配置包

```bash
# 在测试项目中
pnpm add -D @commitlint/cli file:/path/to/commitlint-config/packages/emoji

# 创建配置文件 .commitlintrc.json
{
  "extends": ["@2030/commitlint-config-emoji"]
}

# 测试提交
git commit -m "✨ feat: 测试提交"
```

## 发布流程

### 发布到 npm

1. **确保已登录 npm**:
   ```bash
   npm login
   ```

2. **执行发布命令**:
   ```bash
   # 更新版本并发布
   pnpm release
   
   # 发布主包
   npm publish
   
   # 发布 emoji 包
   cd packages/emoji
   npm publish
   ```

3. **验证发布**:
   ```bash
   npm view @2030/commitlint-config
   npm view @2030/commitlint-config-emoji
   ```

### 版本规范

遵循语义化版本 (Semantic Versioning):

- **major**: 不兼容的 API 修改（如修改规则导致原本通过的提交不再通过）
- **minor**: 向后兼容的功能性新增（如添加新的提交类型）
- **patch**: 向后兼容的问题修正（如文档更新、配置优化）

## 常见问题

### Q1: 如何添加新的提交类型？

修改 `index.js` 和 `packages/emoji/index.js` 中的 `type-enum` 规则：

```javascript
'type-enum': [2, 'always', [
  // ... 现有类型
  'newtype',  // 添加新类型
]]
```

### Q2: 如何自定义规则严格程度？

修改规则数组的第一个参数：

```javascript
'rule-name': [0],  // 禁用
'rule-name': [1],  // 警告
'rule-name': [2],  // 错误
```

### Q3: 为什么 scope-case 规则被禁用？

`'scope-case': [0]` 表示放开对 scope 大小写的限制，允许使用任意格式（驼峰、全大写、全小写等），提供更大的灵活性。

### Q4: 如何在项目中覆盖部分规则？

在项目的配置文件中扩展并覆盖：

```javascript
// .commitlintrc.js
export default {
  extends: ['@2030/commitlint-config'],
  rules: {
    // 覆盖标题最大长度
    'header-max-length': [2, 'always', 100],
  }
}
```

### Q5: Workspace 包如何相互引用？

使用 `workspace:*` 协议：

```json
{
  "dependencies": {
    "@2030/commitlint-config": "workspace:*"
  }
}
```

## 维护指南

### 更新依赖

```bash
# 更新所有依赖到最新版本
pnpm update

# 更新特定依赖
pnpm update @commitlint/config-conventional
```

### 代码规范

- 使用 ESM 模块格式
- 保持代码简洁清晰
- 添加适当的注释说明
- 遵循项目既定的提交规范

### 文档维护

当修改规则或添加新功能时，务必同步更新：
- `README.md`: 用户使用文档
- `DEVELOPMENT.md`: 开发文档（本文档）
- `packages/emoji/README.md`: Emoji 包文档

## 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交改动 (`git commit -m 'feat: 添加某个很棒的特性'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 许可证

[MIT](./LICENSE) License © 2026 ZiJun

## 联系方式

- 作者: DaiJun
- 邮箱: zijun2030@163.com
- GitHub: https://github.com/Jun2030/commitlint-config
