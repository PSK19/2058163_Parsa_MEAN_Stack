let fs = require("fs");
let readline = require("readline-sync");

//Getting Old JSON
let record = JSON.parse(fs.readFileSync("record.json").toString());

//Getting New JSON Addition Info
let fname = readline.question("Enter First Name: ");
let lname = readline.question("Enter Last Name: ");
let gender = readline.question("Enter Gender: ");
let email = readline.question("Enter Email Address: ");
let dateObj = new Date();
let date = (dateObj.getMonth() + 1 + "/" + dateObj.getDate() + "/" + dateObj.getFullYear());
let dateTime = (date + " " +dateObj.getHours() + ":" + dateObj.getMinutes() + ":" + dateObj.getSeconds());

//Pushing to New JSON and Writing to File
record.push({fname:fname,lname:lname,gender:gender,email:email,date:dateTime});
fs.writeFileSync("record.json",JSON.stringify(record));