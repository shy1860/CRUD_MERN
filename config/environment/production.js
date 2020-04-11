'use strict';
let local = require('../local.env.js');
// Production specific configuration
// =================================
module.exports = {
    // Server IP
    ip: process.env.IP ||
        undefined,


    // Control debug level for modules using visionmedia/debug
    DEBUG: '',

    // Server port
    port: 5000,

    
    mongo: {
        uri: 'mongodb://admin:admin@cluster0-shard-00-00-hyur7.mongodb.net:27017,cluster0-shard-00-01-hyur7.mongodb.net:27017,cluster0-shard-00-02-hyur7.mongodb.net:27017/mevn-chat?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
    
    },

    // selfURL: 'http://localhost',
    // webApp: {
    //     url: "http://localhost:80"
    // }
    
};