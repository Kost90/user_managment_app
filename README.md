This project is designed  to showcase my React skills by building a simple application that consumes a mock back end API.

## Installation & Setup

1. Clone the repository.
2. Run `yarn install` (the project is bootstrapped using Yarn but feel free to use another package manager if you prefer)
3. Run `yarn dev` to start the application. It will be available at Vite's default location of http://localhost:5173/
4. Run `yarn start-server` to start the mock back end. You should see a message in the console saying `JSON Server started on PORT :3000` and a list of available endpoints.

**Note:** When running `start-server` the file `db-source.json` will be copied to `db.json`. This is to ensure that the mock data is reset to its original state
when starting up. Any newly created data will be lost when the server is restarted.

## Features

This template comes with the following features:.

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## npm scripts

## Build and dev scripts

- `dev` – start development server
- `build` – build production version of the app
- `preview` – locally preview production build

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
