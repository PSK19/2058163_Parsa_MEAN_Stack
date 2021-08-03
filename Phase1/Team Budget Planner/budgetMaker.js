
function storeData() {
    var storageCounter = 1;
    let cNameValue = document.getElementById("clientName").value;
    let pNameValue = document.getElementById("projectName").value;
    let bValue = document.getElementById("budget").value;
    let thisProj = {clientName:cNameValue,projectName:pNameValue,budget:bValue};
    let thisProjString = JSON.stringify(thisProj);
    //var thisProj = [cNameValue, pNameValue, bValue];
    while (localStorage.getItem(storageCounter) != undefined) {
        storageCounter++;
    }
    localStorage.setItem(storageCounter, thisProjString);
}

function createTable() {
    //document.getElementById("budgetTable").textContent = "<p>hello</p>";
    var tableHead = "<table border=1><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>";
    var iterator = 1;
    var budgetTotal = 0;
    while(localStorage.getItem(iterator) != undefined) {
        var projString = localStorage.getItem(iterator);
        var parsedString = JSON.parse(projString);
        var budgetNum = parseFloat(parsedString.budget)
        var budgetString = budgetNum.toLocaleString('en-US',{maximumFractionDigits:2});
        tableHead = tableHead + "<tr><td>" + parsedString.clientName + "</td><td>" + parsedString.projectName + "</td><td>$"+ budgetString + "</td></tr>";
        budgetTotal += budgetNum;
        iterator++;
    }
    var budgetTotalString = budgetTotal.toLocaleString('en-US',{maximumFractionDigits:2});
    tableHead = tableHead + "<tr><td></td><td>Total</td><td>$" + budgetTotalString + "</td></tr>";
    //tableHead = "</table>";
    //document.getElementById("budgetTable").textContent = "<p>bye</p>";
    document.getElementById("budgetTable").innerHTML = tableHead;
} 