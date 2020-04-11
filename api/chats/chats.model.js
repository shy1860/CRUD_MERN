'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ChatSchema = new mongoose.Schema({
    room: { type: Schema.Types.ObjectId, ref: 'Room' },
    nickname: String,
    message: String,
    created_date: { type: Date, default: Date.now }
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
    },
    timestamps: true
});

ChatSchema.pre('find', function () {
    this.where({is_active: { $ne: false } });
});

  

  module.exports = mongoose.model('Chat', ChatSchema)