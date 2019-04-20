# CAT BREED API

[![Netlify Status](https://api.netlify.com/api/v1/badges/5bf991ff-67b7-4b6a-9444-a6deac7e64fb/deploy-status)](https://app.netlify.com/sites/focused-elion-17290b/deploys) [![Maintainability](https://api.codeclimate.com/v1/badges/4362c2af67b51f449960/maintainability)](https://codeclimate.com/github/rendall/api-cat/maintainability)

The Cat Breed API is live here: <https://focused-elion-17290b.netlify.com/>

It serves the backend for Client Cat <https://github.com/rendall/client-cat>

## endpoints

- GET [/breed](https://focused-elion-17290b.netlify.com/.netlify/functions/breed)
- GET [/breed/{id}](https://focused-elion-17290b.netlify.com/.netlify/functions/breed/5cad85a5f720f54848771d92)
- GET [/breed?search={term}](https://focused-elion-17290b.netlify.com/.netlify/functions/breed?search=longhair)

## development

Source code is primarily in the `./ts` folder which is a mirror of the project folder. A developer would mostly only touch the files in there. The build step compiles and moves the generated `.js` files to the project folder.

- `yarn run build`: compiles the source code
- `yarn run test` : tests the API
- `yarn run serve` : serves a local version at [localhost](http://localhost:9000/.netlify/functions/breed)

## install and start

  First check the assumptions, below, then:

- `git clone https://github.com/rendall/api-cat.git`

  Then in the `api-cat` directory, type these commands in order:

- `yarn install` or `npm install` : installs all dependencies
- `tsc` : compiles `.ts` files into `.js`
- `yarn run insert` : seeds a mongo Atlas cluster
- `yarn run build`

  If all went well, the API is ready for deployment.

- `git push . master:deploy`
- `git push origin deploy:deploy`

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
- a [Netlify](https://www.netlify.com/) account and site is set up
  - that deploys the `deploy` branch
  - environment variables are in site settings
