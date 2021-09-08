let http = require("http");
let url = require("url");
let request = require("request");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let routerCourse = require("./course.router");
let express = require("express");
let axios = require("axios");
let app = express();
app.use(cors());
app.use(bodyParser.json());
let mongoUrl = "mongodb://localhost:27017/tcsmean";
mongoose.connect(mongoUrl).then(res=>console.log("connected")).catch(error=>console.log(error));
app.use("/api/course",routerCourse);



//HTML Homepage
let homepage = `
<h2>Course Platform</h2>
<br/>
<a href='/addCourse'>Add Course</a><br/>
<a href='/updateCourse'>Update Course</a><br/>
<a href='/deleteCourse'>Delete Course</a><br/>
<a href='/fetchCourses'>Fetch Courses</a><br/>
<hr/>
`;

//Add Course Page
let addCourseHTML = `
<h2>Add Course</h2>
<br/>
<form action="addCourseSubmit">
    Course Id: <input type="text" name="cid"><br/>
    Course Name: <input type="text" name="cname"><br/>
    Description: <input type="text" name="cdesc"><br/>
    Amount: <input type="text" name="camount"><br/>
    <input type="submit" value="Submit"/>
    <input type="reset" value="Reset"/>
</form>
`

//Update Course Page
let updateCourseHTML = `
<h2>Update Course</h2>
<br/>
<form action="updateCourseSubmit">
    Course Id: <input type="text" name="cid"><br/>
    Amount: <input type="text" name="camount"><br/>
    <input type="submit" value="Submit"/>
    <input type="reset" value="Reset"/>
</form>
`

//Delete Course Page
let deleteCourseHTML = `
<h2>Delete Course</h2>
<br/>
<form action="deleteCourseSubmit">
    Course Id: <input type="text" name="cid"><br/>
    <input type="submit" value="Submit"/>
    <input type="reset" value="Reset"/>
</form>
`


let server = http.createServer((request,response)=>{
    
    let urlInfo = url.parse(request.url,true);
    response.writeHead(200, { "content-type": "text/html" });
    response.write(homepage);

    //Add Course Page
    if(urlInfo.pathname=="/addCourse"){
        response.write(addCourseHTML);
    }

    //Update Course Page
    if(urlInfo.pathname=="/updateCourse"){
        response.write(updateCourseHTML);
    }

    //Delete Course Page
    if(urlInfo.pathname=="/deleteCourse"){
        response.write(deleteCourseHTML);
    }

    //Add Course Submit
    if(urlInfo.pathname=="/addCourseSubmit"){
        let info = urlInfo.query;
        axios.post("http://localhost:9000/api/course/storeCourse",{
                "_id": info.cid,
                "cName": info.cname,
                "cDesc": info.cdesc,
                "cAmount": info.camount
            }).then(res=>{console.log("added")}).catch(error=>{console.log(error)});
    }

    //Update Course Submit
    if(urlInfo.pathname=="/updateCourseSubmit"){
        let info = urlInfo.query;
        axios.put("http://localhost:9000/api/course/updateCourse",{
                "_id": info.cid,
                "cAmount": info.camount
            }).then(res=>{console.log("updated")}).catch(error=>{console.log(error)});
    }

    //Delete Course Submit
    if(urlInfo.pathname=="/deleteCourseSubmit"){
        let info = urlInfo.query;
        async function deleteCourse(){
            let res = await axios.delete("http://localhost:9000/api/course/deleteCourse/" + info.cid);
        }
        deleteCourse();
    }

    //Show course Info
    if(urlInfo.pathname=="/fetchCourses"){
        async function getCourses(){
            let courses = await axios.get("http://localhost:9000/api/course/getCourse");
            let course = courses.data;
            let courseHTML = `<table border="1"><tr><th>Course ID</th><th>Course Name</th><th>Course Description</th><th>Amount</th>`
            for(let i = 0; i < course.length; i++){
                courseHTML += `<tr><td>` + course[i]._id + `</td><td>` + course[i].cName + `</td><td>` + course[i].cDesc + `</td><td>` + course[i].cAmount + `</td></tr>`;
            }
            courseHTML += `</table>`
            response.write(courseHTML);
        }
        getCourses();
    }
});


server.listen(9090,() => console.log("server running on 9090"));
app.listen(9000,() => console.log("server running on 9000"));