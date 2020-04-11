'use strict';

const Event = require('../events/events.model');

module.exports = {
      index: (req, res) => {
          Event
          .find({})
          .exec((err, eventDetails)=>{
               if (err) {
                   res.status(500).json({message : err})
               }
res.status(200).json({ message: "Event Details fetched Successfully", data : eventDetails});
          })
      }
      
    }      