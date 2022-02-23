# TODO GraphQL Server

## What it does

- Sending responses to [our app](https://github.com/inclusive-e/frontend).

## Prerequisite

In order to run the source, you need to install all these services:

- [Postgresql](https://www.postgresql.org/download/)
- [NodeJS](https://nodejs.org/en/download/)
- [Typescript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/docs/getting-started)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)

## How to run the source

- Create `.env` file and copy everything from `env.example` to `.env`. Note that `NODE_ENV` must be `development`.
- Then run `npm i` or `npm install` to install all the npm packages.
- Run `npm run migration` to create the database.
- Run `npm run seed` to run the seeds.
- Run `npm start` to run the source.
