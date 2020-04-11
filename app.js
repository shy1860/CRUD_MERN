/**
 * Main application file
 */

'use strict';

// Set default node environment to development
const port = process.env.PORT || 5000;

const express = require('express');
const config = require('./config/environment');
const mongoose = require('mongoose');

//Connect to database
mongoose.Promise = global.Promise;
mongoose.connect(config.db.URI, config.mongo.options);

mongoose.connection.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});


const app = express();


const server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);
require('./config/seed');


if(process.env.NODE_ENV === 'production') { 
      console.log("Express is botting up in production");
      app.use(express.static('front-end/build'))
      app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'front-end', 'build', 'index.html'));
      });
    }
// Start server
server.listen(port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});

// Expose app
exports = module.exports = app;

