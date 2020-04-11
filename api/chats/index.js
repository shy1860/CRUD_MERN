'use strict';
const express = require('express');
const controller = require('./chats.controller');
const router = express.Router();
const VerifyToken = require('../auths/verifyToken');
router.get('/', VerifyToken, controller.index);
module.exports = router;