# nest-typescript-starter
Framework TypeScript starter repository.

## Stack
-   NestJS
-   TypeScript
-   TypeGraphQL
-   Prisma 2
-   ESLint
-   Jest
-   Stryker

## Installation

```bash
$ npm ci
```

## Tasks

| Command              | Description                         |
| :------------------- | :---------------------------------- |
| `npm run start`      | Running the app in development mode |
| `npm run start:dev`  | Running the app in watch mode       |
| `npm run start:prod` | Running the app in production mode  |
| `npm run test:r`     | Unit tests                          |
| `npm run test:e2e`   | E2E tests                           |
| `npm run test:cov`   | Test coverage                       |
| `npm run test:m`     | Run mutation tests                  |

## Project Structure

-   `src` - Source code
-   `@generated` - Generated code
-   `prisma` - DB toolkit to query, migrate and model your database