### Startup Steps

 * Clone repo and run `npm i` from root
 * Create database and get credentials
 * Create .env and add contents
 * Run `npm run dev` to start app in dev mode

## Knex Commands

 - `knex migrate:make [migration name]` to create a new migration
 - Once migrations are written - `knex migrate:latest` to run the migration
 - `knex migrate:rollback` to rollback the most recent batch of migrations

## .env Contents

 - DATABASE_HOST
 - DATABASE_USER
 - DATABASE_PASSWORD
 - DATABASE_NAME
 - SEND_FROM_MAIL
 - PORT