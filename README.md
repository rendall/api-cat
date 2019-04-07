# CAT BREED API

## endpoints

- GET /breed
- GET /breed/{id}
- GET /breed?search={term}

## install and start

Type these commands in order:

- `yarn install` or `npm install` : installs all dependencies
- `yarn run insert` : seeds a mongo Atlas cluster
- `yarn run build`: compiles the source code
- `yarn run test` : tests the API
- `yarn run serve` : serves a local version at [localhost](http://localhost:9000/.netlify/functions/breed)

If all went well, the API is ready for deployment.

- `git merge master deploy`
- `git push`

## assumptions

- `git` is installed
- `node` is installed (version in `./.nvmrc` file: `v11.9.0`)
- `yarn` is installed (optional), otherwise `npm` is fine
- a `.env` file exists, following `.env.example`
- a [MongoDB Atlas cluster](https://docs.atlas.mongodb.com/create-new-cluster/) is provisioned
  - that has two users
    - a *reader* which has read access to the 'breeds' collection of the 'cat' database
    - and an *admin* which can create a database
  - and their respective connection strings are in the `.env` file (see `.env.example`)
- a [Netlify] account and site is set up
  - that deploys the `deploy` branch