let mongoose = require("mongoose");
mongoose.pluralize(null);

let chatSchema = mongoose.Schema({
    name:String,
    message:String
})

module.exports = mongoose.model('Chat',chatSchema);