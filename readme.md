# Project description

This is an example of a Rest API written in Express

In this project are used:
- Node
- Express
- Sequelize
- MySQL



# Install project
Install dependencies
```
npm install
```

# Configure .env file

`` SERVER_URL=localhost`` - backend API base URL

``SERVER_PORT=3000``- backend API port 

``DB_HOST=localhost`` - database host 

``DB_USER=express_test`` - database user

``DB_PASSWORD="password"`` - database password

``DB_NAME=express_test`` - database name

``DB_DIALECT=mysql`` - database dialect

# Migrating database(Sequelize) 

Sequelize documentation: https://sequelize.org/
## Launch new migrations
```
npm run migrate
```
or
```
cd src/database
npx sequelize db:migrate
```

# Rollback last migration
```
npm run migrate:undo
```
or
```
cd src/database
npx sequelize db:migrate:undo
```

# Rollback all migrations
```
cd src/database
npx sequelize db:migrate:undo
```

# Full documentation about migration
> https://github.com/sequelize/cli#installation

# Run project
```
npm run dev
```


# Project structure

```
|-- src
    |-- api
        |-- controllers (REST controllers)
        |-- routes (application routes)
        |-- services (services layer)
    |-- database (database: config, migrations)
        |-- config (database config)
        |-- models (application models)
        |-- migrations (database migrations)
        |-- seeders (database seeders)
        |-- repositories (repositories layer)
        |-- index.js (database init)
    |app.js (application entry point)
|-- .env (environment variables)
|-- .gitignore
|-- package.json
```

## Postman collection link
https://www.getpostman.com/collections/b2a29713bceae454a41e