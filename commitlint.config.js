module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-case': [2, 'always', 'lower-case'],
    'header-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-exclamation-mark': [2, 'never'],
  },
};
