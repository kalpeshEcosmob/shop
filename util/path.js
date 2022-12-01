const path = require('path');

module.exports = path.dirname(process.mainModule.filename);

// "build": "NODE_ENV=production ./node_modules/.bin/netlify-lambda build src",