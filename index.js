// type(scope?): subject
// body?
// footer?
export default {
  extends: ['@commitlint/config-conventional'],
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
    // type 可选项
    'type-enum': [2, 'always',
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
      ],
    ],
  }
}