# Boilerplate

- A simple boilerplate setup for getting started quickly with node.js, express, and a postgres SQL database on the backend.

On the frotnend is React.js using the SASS compiler extension in VS code.

- Run npm install from both the back and frontend folders to install all necessary dependencies. If you run into issues you may need to delete the node_modules folder and the package-lock.json 
*NOT THE PACKAGE.JSON* before running npm install.

- Next configure your database using PSQL in your terminal and set your .env variables using the .env.example folder.
- https://formulae.brew.sh/formula/postgresql
- https://www.postgresql.org/docs/10/tutorial-start.html
https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e

Postgres quick start commands

Run: psql postgres

CREATE DATABASE yourdbname;

CREATE USER youruser WITH ENCRYPTED PASSWORD 'yourpass';

GRANT ALL PRIVILEGES ON DATABASE yourdbname TO youruser;

- Review the package.json files in both the back and frontend folders for useful commands.


# SASS Compiler

- Download the sass compiler extension
- Go to VS code setting:
  - Extensions
  - Live sass compiler config
  - Live Sass Compile › Settings: Formats
  - Change the savePath from null to "frontend/public/styles"
  - There is another setting just under called liveSassCompile.settings.generateMap, change it from true to false
  - save changes

App.scss is the main file, all additional scss files created must have an underscore \_ at the start of them and then be imported to App.scss. This will allow you to have only one file for the css within the public folder.

# Remove Git

- rm -rf .git*
- https://kbroman.org/github_tutorial/pages/init.html

# Heroku DB

- https://dev.to/prisma/how-to-setup-a-free-postgresql-database-on-heroku-1dc1


