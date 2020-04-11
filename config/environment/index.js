'use strict';
const path = require('path');
const _ = require('lodash');
const local = require('../local.env.js');

// if (!process.env.PORT) {
//     console.log("Environment Not Set. Please set ROOM_NODE_ENV to development | test");
//     requiredProcessEnv(PORT);
//     process.exit(2);
// }

// function requiredProcessEnv(PORT) {
//     if (!process.env[PORT]) {
//         throw new Error('You must set the ' + PORT + ' environment variable');
//     }
//     return process.env[PORT];
// }

// All configurations will extend these options
// ============================================
let config = {
    env: process.env.PORT,

    // Root path of server
    

    root: path.normalize(__dirname + '/../../..'),

    // Server port
    port: process.env.PORT || 5000,

    // Server IP
    ip: process.env.IP || '0.0.0.0',

    // Should we populate the DB with sample data?
    seedDB: false,

    mongo: {
        options: {
            useNewUrlParser: true
        }
    },

    // selfDomain: "erpfs.com",
    
};

// Export the config object based on the ROOM_NODE_ENV
// ==============================================
module.exports = _.merge(
    config,
    require('./' + process.env.NODE_ENV + '.js') || {},
    require('../local.env.js'));