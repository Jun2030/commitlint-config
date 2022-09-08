module.exports = {
  ignores: [commit => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 标题最大长度 72 个字符
    'header-max-length': [2, 'always', 72],
    // 内容以空行开始
    'body-leading-blank': [2, 'always'],
    // 结尾以空行开始
    'footer-leading-blank': [2, 'always'],
    // Scope 永远小写
    'scope-case': [2, 'always', 'lower-case'],
    // 不允许标题空着
    'subject-empty': [2, 'never'],
    // 不允许使用句号
    'subject-full-stop': [2, 'never'],
    // type 必须小写
    'type-case': [2, 'always', 'lower-case'],
    // type 不能为空
    'type-empty': [2, 'never'],
    // type 可选项
    'type-enum': [2, 'always',
      [
        'feat',     // 新增功能/特性
        'fix',      // 修复BUG/问题
        'upd',      // 更新某功能
        'docs',     // 变更文档/注释
        'style',    // 调整代码格式(不影响功能,空格/分号等格式修正)
        'types',    // 类型声明或修改
        'refactor', // 重构代码(不包括修复BUG/新增功能)
        'perf',     // 优化/性能提升
        'test',     // 测试(用例)相关
        'workflow', // 构建流程/工具变更(修改打包配置等)
        'ci',       // 持续集成
        'revert',   // 回滚提交
        'merge',    // 合并分支
        'chore',    // 依赖更新/脚手架配置修改
        'wip',      // 开发中
        'mod',      // 不确定分类的修改
      ],
    ],
  },
};
