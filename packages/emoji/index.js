export default {
  extends: ['git-commit-emoji'],
  rules: {
    // 标题最大长度 108 个字符
    'header-max-length': [2, 'always', 108],
    // <body> 内容以空行开始
    'body-leading-blank': [2, 'always'],
    // <footer> 结尾以空行开始
    'footer-leading-blank': [2, 'always'],
    // <scope> 永远小写
    'scope-case': [2, 'always', 'lower-case'],
    // 主题检查
    'subject-case': [2, 'never'],
    // <subject>不允许标题空着
    'subject-empty': [2, 'never'],
    // <subject>不允许使用感叹号
    'subject-exclamation-mark': [2, 'never'],
    // <subject>不允许使用句号
    'subject-full-stop': [2, 'never', '.'],
    // <type> 必须小写
    'type-case': [2, 'always', 'lower-case'],
    // <type> 不能为空
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always',
      [
        '🎉 init',          // 初次提交
        '🚧 work',          // 工作进行中
        '👔 work',          // 添加/更新业务逻辑
        '✨ feat',          // 添加新功能
        '💥 feat',          // 引入重大改变
        '🐛 fix',           // 修复BUG
        '🩹 fix',           // 简单修复非关键性问题
        '🚑 fix',           // 紧急热修复
        '🔒️ fix',           // 修复安全/隐私问题
        '🚨 fix',           // 修复编译错误/警告
        '✏️ typos',         // 修复拼写错误/错别字
        '💄 style',         // 添加/更新UI样式文件
        '🎨 style',         // 改进项目结构/代码格式
        '📝 docs',          // 添加/更新文档
        '🔧 config',        // 添加/修改配置文件
        '💡 comment',       // 添加/更新注释
        '🚚 rename',        // 移动/重命名文件/路径
        '🔥 chore',         // 添加/删除代码/文件
        '📌 chore',         // 固定依赖版本
        '➕ chore',         // 添加依赖
        '➖ chore',         // 删除依赖
        '⬆️ chore',          // 升级依赖
        '⬇️ chore',          // 降级依赖
        '⚡️ perf',          // 优化性能
        '🗑️ perf',          // 删除无用代码
        '🔊 log',           // 添加/更新日志
        '🔇 log',           // 删除日志
        '♻️ refactor',      // 重构代码
        '🧪 test',          // 添加/修改测试用例
        '🦺 test',          // 添加/更新验证相关代码
        '🚀 build',         // 构建/部署功能
        '🔖 release',       // 发行版本标签
        '🌐 i18n',           // 国际化
        '⏪ revert',        // 回滚提交
        '🔀 merge',         // 合并分支
        '👥 contributor',   // 添加/更新贡献者
        '🏷️ types',         // 类型声明或修改
        '👷‍♂️ ci',            // 持续集成
      ],
    ],
  },
};
