/* eslint-disable global-require */
module.exports = {
  ...require('config/eslint-express-ts'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
