const fs = require('fs');

const profileDataArgs = process.argv.slice(2, process.argv.lenght);

const [name, github] = profileDataArgs;

const generatePage = require('./src/page-template');

  