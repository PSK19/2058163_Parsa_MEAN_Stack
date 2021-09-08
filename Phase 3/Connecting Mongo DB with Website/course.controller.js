let courseModel = require("./course.model");

let storeCourseInfo = (request,response)=>{
    let course = request.body;

    courseModel.insertMany(course,(err,result)=>{
        if(!err){
            response.send("Record Stored Successfully");
        }
        else{
            response.send(err);
        }
    });
}

let updateCourseInfo = (request,response)=>{
    let course = request.body;
    courseModel.updateOne({_id:course._id},{$set:{cAmount:course.cAmount}},(err,result)=>{
        if(!err){
            response.send(result);
        }
        else{
            response.send(err);
        }
    });
}

let deleteCourseInfo = (request,response)=>{
    let cid = request.params.cid;
    courseModel.deleteOne({_id:cid},(err,result)=>{
        if(!err){
            response.send(result);
        }
        else{
            response.send(err);
        }
    });
}

let getCourseInfo = (request,response)=>{
    courseModel.find({},(err,data)=>{
        if(!err){
            response.json(data);
        }
        else{
            response.json(err);
        }
    });
}

module.exports = {storeCourseInfo,updateCourseInfo,deleteCourseInfo,getCourseInfo};