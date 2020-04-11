'use strict';

const Room = require('../rooms/rooms.model');

module.exports = {
      index: (req, res) => {
          Room
          .find({})
          .exec((err, roomDetails)=>{
               if (err) {
                   res.status(500).json({message : err})
               }
res.status(200).json({ message: "room Details fetched Successfully", data : roomDetails});
          })
      },
      retrieve: (req, res) => {
           const roomId = req.params.id;
           Room
           .findOne({_id:roomId})
           .exec((err, roomDetails)=>{
                if (err) {
                    res.status(500).json({message : err})
                }
                
                res.status(200).json({ message: "room Details fetched Successfully", data : roomDetails});
           })
       },
       create: (req, res) => {
           Room.create(req.body, (err, roomDetails) => {
                if (err) {
                     res.status(500).json({message : err})
                }
                res.status(201).json({ message: "room Created Successfully", data : roomDetails});
           })
       },
       update: (req, res)=>{
            const roomId = req.params.id;
            Room
            .findByIdAndUpdate(roomId, { $set: req.body })
            .exec((err, roomDetails) => {
                 if (err) res.status(500).json({message : err})
                 res.status(200).json({ message: "room updated"});
            })
       },
       delete: (req, res)=>{
            const roomId = req.params.id;
            Room.findByIdAndRemove(roomId)
            .exec((err, roomDetails) => {
                 if (err) res.status(500).json({message : err})
                 res.status(200).json({ message: "room Deleted"});
             })
       }
}