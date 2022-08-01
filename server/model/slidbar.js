const mongoose = require('mongoose');
const slidebar = mongoose.Schema([{
    tittle:String,
    description: String,
    button:{
        name: String,
        link: String
    }
}])

module.exports = slidebar;