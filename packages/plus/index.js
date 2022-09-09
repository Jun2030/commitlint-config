module.exports = {
  extends: ['@2030/commitlint-config'],
  rules: {
    // <scope> 不能为空
    'scope-empty': [2, 'never'],
  },
};
