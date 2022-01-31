# Mock API Turborepo

## What's inside?

This turborepo uses [NPM](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `demo`: a [Next.js](https://nextjs.org) app
- `express-ts`: a [Express.js](https://expressjs.com) app build with tsc
- `express-esbuild`: a [Express.js](https://expressjs.com) app build with esbuild
- `express-swc`: a [Express.js](https://expressjs.com) app build with swc
- `ui`: a stub React component library
- `config`: `eslint` configurations
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Husky](https://typicode.github.io/husky) for git hook

### Build

To build all apps and packages, run the following command:

```
cd mock-api
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd mock-api
npm run dev
```
