let http = require("http");
let fs = require("fs");
let url = require("url");
let tasks = JSON.parse(fs.readFileSync("tasks.json").toString());
// let tasks = [
//     {"empId":"100","taskId":"100","task":"eat","deadline":"tomorrow"}
// ]

//Create HTML Page
let form = `
<h2>Task Planner</h2>
    <h3><u>Add Task</u></h3>
    <form action='addTask'>
        <label>Employee Id</label>
        <input type="text" name="empId" /><br />
        <label>Task Id</label>
        <input type="text" name="taskId" /><br />
        <label>Task</label>
        <input type="text" name="task" /><br />
        <label>Deadline</label>
        <input type="date" name="deadline" /><br />
        <input type="submit" value="Add Task">
    </form>
    <h3><u>Delete Task</u></h3>
    <form action = 'deleteTask'>
        <label>Task Id</label>
        <input type="text" name="delId" /><br />
        <input type="submit" value="Delete Task" />
    </form>
    <h3><u>List Tasks</u></h3>
    <form action="showTasks">
        <input type="submit" value="List Tasks" />
    </form>
`

//Create Server
let server = http.createServer((request, response) => {
    let urlInfo = url.parse(request.url,true);
    response.writeHead(200, { "content-type": "text/html" });
    response.write(form);

    //Add Task Button
    if(urlInfo.pathname == "/addTask"){
        let newInfo = urlInfo.query;
        let flag = 0;
        for(let i = 0; i < tasks.length; i++){
            if(tasks[i].taskId==newInfo.taskId){
                flag++;
            }
        }
        if(flag>0){
            console.log("Task Id Must Be Unique");
        }
        else{
            tasks.push(newInfo);
            fs.writeFileSync("tasks.json",JSON.stringify(tasks));

        }
    }

    //Delete Task Button
    else if(urlInfo.pathname == "/deleteTask"){
        let newInfo = urlInfo.query;
        let flag = -1;
        for(let i = 0; i < tasks.length; i++){
            if(tasks[i].taskId==newInfo.delId){
                flag=i;
            }
        }
        if(flag == -1){
            alert("item does not exist");
        }
        else{
            tasks.splice(flag,1);
            fs.writeFileSync("tasks.json",JSON.stringify(tasks));
        }
    }

    //Show Tasks
    if(urlInfo.pathname == "/showTasks" || urlInfo.pathname == "/addTask" || urlInfo.pathname == "/deleteTask"){
        let tableRows = "";
        for(let i = 0; i < tasks.length; i++)[
            tableRows += `
            <tr>
                <td>` + tasks[i].empId + `
                <td>` + tasks[i].taskId + `
                <td>` + tasks[i].task + `
                <td>` + tasks[i].deadline + `
            </tr>
            `
        ]
        let table = `
        <table border="1">
            <tr>
                <th>Employee Id</th>
                <th>Task Id</th>
                <th>Task</th>
                <th>Deadline</th>
            </tr>
            ` + tableRows + `
        </table>        
        `
        response.write(table);
    }
    
    response.end();
});

server.listen(9090, () => console.log("server running on 9090"));