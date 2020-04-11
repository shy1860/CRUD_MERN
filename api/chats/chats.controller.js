'use strict';

const Chat = require('../chats/chats.model');

module.exports = {
      index: (req, res) => {
          Chat
          .find({})
          .exec((err, chatDetails)=>{
               if (err) {
                   res.status(500).json({message : err})
               }
res.status(200).json({ message: "Chat Details fetched Successfully", data : chatDetails});
          })
      }
      
    }      