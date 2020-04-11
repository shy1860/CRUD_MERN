/**
 * Express configuration
 */

'use strict';

const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('errorhandler');
const path = require('path');
const config = require('./environment');

module.exports = function(app) {
  const env = app.get('env');

  // **ALLOW CORS**** WARN: NOT SECURE 
  app.use(cors());

  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(express.static(path.join(__dirname, "front-end", "build")))
  // app.use(express.static(path.join(__dirname, 'dist')));
  // app.use('/v1/auths', express.static(path.join(__dirname, 'dist')));

  if ('development' === env || 'test' === env) {
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  }
};