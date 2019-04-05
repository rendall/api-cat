# CAT BREED API

## endpoints

- GET /breed
- GET /breed/{id}
- GET /breed?search={term}

## install and start

Type these commands in order:

- `yarn install` or `npm install` : installs all dependencies
- `yarn insert` : initializes a mongo database, 'breeds' collection, and inserts data
- `yarn build`: compiles the source code
- `yarn test` : tests the API

Assuming all is well, the API is up and running.

## assumptions

- `git` is installed
- `node` is installed
- a `.env` file exists, following `.env.example`
- a [MongoDB Atlas cluster](https://docs.atlas.mongodb.com/create-new-cluster/) is provisioned
  - it has two users
    - a *reader* which has read access to the 'breeds' collection of the 'cat' database
    - and an *admin* which can create a database
  - their respective connection strings are in the `.env` file
- optionally `yarn` is installed, otherwise `npm` is fine