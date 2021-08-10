function addCounter() {
    var getLaptops = parseFloat(sessionStorage.getItem("laptops"));
    var getPhones = parseFloat(sessionStorage.getItem("phones"));
    var getDesktops = parseFloat(sessionStorage.getItem("desktops"));
    var getMonitors = parseFloat(sessionStorage.getItem("monitors"));
    var total = getLaptops + getPhones + getDesktops + getMonitors;
    var totalString = String(total);
    document.getElementById("cartSize").innerHTML = totalString;
}
function checkStorage() {
    if (sessionStorage.getItem("laptops") == undefined) {
        sessionStorage.setItem("laptops", "0");
    }
    if (sessionStorage.getItem("phones") == undefined) {
        sessionStorage.setItem("phones", "0");
    }
    if (sessionStorage.getItem("desktops") == undefined) {
        sessionStorage.setItem("desktops", "0");
    }
    if (sessionStorage.getItem("monitors") == undefined) {
        sessionStorage.setItem("monitors", "0");
    }
}
function addLaptop() {
    checkStorage();
    var quantity = document.getElementById("laptopAddNum").value;
    var getStorage = sessionStorage.getItem("laptops");
    var oldValue = parseFloat(getStorage);
    var newValue = parseFloat(quantity) + oldValue;
    var newValueString = newValue + '';
    sessionStorage["laptops"] = newValueString;
    addCounter();
}
function addPhone() {
    checkStorage();
    var quantity = document.getElementById("phoneAddNum").value;
    var getStorage = sessionStorage.getItem("phones");
    var oldValue = parseFloat(getStorage);
    var newValue = parseFloat(quantity) + oldValue;
    var newValueString = newValue + '';
    sessionStorage["phones"] = newValueString;
    addCounter();
}
function addDesktop() {
    checkStorage();
    var quantity = document.getElementById("desktopAddNum").value;
    var getStorage = sessionStorage.getItem("desktops");
    var oldValue = parseFloat(getStorage);
    var newValue = parseFloat(quantity) + oldValue;
    var newValueString = newValue + '';
    sessionStorage["desktops"] = newValueString;
    addCounter();
}
function addMonitor() {
    checkStorage();
    var quantity = document.getElementById("monitorAddNum").value;
    var getStorage = sessionStorage.getItem("monitors");
    var oldValue = parseFloat(getStorage);
    var newValue = parseFloat(quantity) + oldValue;
    var newValueString = newValue + '';
    sessionStorage["monitors"] = newValueString;
    addCounter();
}
function remLaptop() {
    checkStorage();
    var quantity = document.getElementById("laptopRemNum").value;
    var getStorage = sessionStorage.getItem("laptops");
    var oldValue = parseFloat(getStorage);
    if (parseFloat(quantity) > oldValue) {
        quantity = String(oldValue);
    }
    var newValue = oldValue - parseFloat(quantity);
    var newValueString = newValue + '';
    sessionStorage["laptops"] = newValueString;
    addCounter();
}
function remPhone() {
    checkStorage();
    var quantity = document.getElementById("phoneRemNum").value;
    var getStorage = sessionStorage.getItem("phones");
    var oldValue = parseFloat(getStorage);
    if (parseFloat(quantity) > oldValue) {
        quantity = String(oldValue);
    }
    var newValue = oldValue - parseFloat(quantity);
    var newValueString = newValue + '';
    sessionStorage["phones"] = newValueString;
    addCounter();
}
function remDesktop() {
    checkStorage();
    var quantity = document.getElementById("desktopRemNum").value;
    var getStorage = sessionStorage.getItem("desktops");
    var oldValue = parseFloat(getStorage);
    if (parseFloat(quantity) > oldValue) {
        quantity = String(oldValue);
    }
    var newValue = oldValue - parseFloat(quantity);
    var newValueString = newValue + '';
    sessionStorage["desktops"] = newValueString;
    addCounter();
}
function remMonitor() {
    checkStorage();
    var quantity = document.getElementById("monitorRemNum").value;
    var getStorage = sessionStorage.getItem("monitors");
    var oldValue = parseFloat(getStorage);
    if (parseFloat(quantity) > oldValue) {
        quantity = String(oldValue);
    }
    var newValue = oldValue - parseFloat(quantity);
    var newValueString = newValue + '';
    sessionStorage["monitors"] = newValueString;
    addCounter();
}
function createTable() {
    var laptopAmount = parseFloat(sessionStorage.getItem("laptops"));
    var phoneAmount = parseFloat(sessionStorage.getItem("phones"));
    var desktopAmount = parseFloat(sessionStorage.getItem("desktops"));
    var monitorAmount = parseFloat(sessionStorage.getItem("monitors"));
    var laptopCost = laptopAmount * 400;
    var phoneCost = phoneAmount * 600;
    var desktopCost = desktopAmount * 1000;
    var monitorCost = monitorAmount * 150;
    var totalPrice = laptopCost + phoneCost + desktopCost + monitorCost;
    var table = "\n                    <tr>\n                        <th>Item</th>\n                        <th>Quantity</th>\n                        <th>Cost</th>\n                    </tr>\n                    <tr>\n                        <td>Laptops</td>\n                        <td>X" + laptopAmount + "</td>\n                        <td>$" + laptopCost + "</td>\n                    </tr>\n                    <tr>\n                        <td>Phones</td>\n                        <td>X" + phoneAmount + "</td>\n                        <td>$" + phoneCost + "</td>\n                    </tr>\n                    <tr>\n                        <td>Desktops</td>\n                        <td>X" + desktopAmount + "</td>\n                        <td>$" + desktopCost + "</td>\n                    </tr>\n                    <tr>\n                        <td>Monitors</td>\n                        <td>X" + monitorAmount + "</td>\n                        <td>$" + monitorCost + "</td>\n                    </tr>\n                    <tr>\n                        <td> </td>\n                        <td> </td>\n                        <td> </td>\n                    </tr>\n                    <tr>\n                        <td></td>\n                        <td><b>Total Cost</b></td>\n                        <td><b>$" + totalPrice + "</b></td>\n                    </tr>\n                ";
    document.querySelector("#table").innerHTML = table;
}
