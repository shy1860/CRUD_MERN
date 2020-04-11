/**
* Main application routes
*/
'use strict';
module.exports = function(app) {
       app.use('/api/', require('./api/auths'));
       app.use('/api/v1/auths', require('./api/auths'));
       app.use('/api/v1/rooms', require('./api/rooms'));
       app.use('/api/v1/events', require('./api/events'));
       app.use('/api/v1/chats', require('./api/chats'));
};