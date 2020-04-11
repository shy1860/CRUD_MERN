'use strict';

module.exports = {

    secrets: {
        session: "mevn-chat",
        expiresIn: 2629746000
    },

    db:{
        URI: 'mongodb://admin:admin@cluster0-shard-00-00-hyur7.mongodb.net:27017,cluster0-shard-00-01-hyur7.mongodb.net:27017,cluster0-shard-00-02-hyur7.mongodb.net:27017/mevn-chat?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
    
    }
}