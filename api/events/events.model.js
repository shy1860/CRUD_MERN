'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    eventType: String,
    time: {type: Date, default: Date.now},
    userName: String,
    socketID: String,
    room: String
  },
  {
    id: false,
    toObject: {
        virtuals: true,
        getters: true
    },
    toJSON: {
        virtuals: true,
        getters: true,
        setters: false
    }
    
});

EventSchema.pre('find', function () {
    this.where({is_active: { $ne: false } });
});

  
  module.exports = mongoose.model('Event', EventSchema);