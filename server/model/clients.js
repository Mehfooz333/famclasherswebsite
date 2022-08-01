const mongoose = require('mongoose');

var scheme = new mongoose.Schema({
   
    name : {
        type: String,
        unique : false,
        required : true
    },
    description : {
        type: String,
        unique : false,
        required : true
    },
    image_file :
    {
        type: String,
        unique : false
    }
});

var clients = mongoose.model("clients_records", scheme);

module.exports = clients;