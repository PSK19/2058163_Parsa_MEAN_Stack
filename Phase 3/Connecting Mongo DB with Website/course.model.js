let mongoose = require("mongoose");

mongoose.pluralize(null);
let courseSchema = mongoose.Schema({
    _id:Number,
    cName:String,
    cDesc:String,
    cAmount:Number
})

let courseModel = mongoose.model("Course",courseSchema);

module.exports=courseModel;