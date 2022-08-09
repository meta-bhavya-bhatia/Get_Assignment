var employeeName, employeeGender, employeeEmail, employeePassword, employeeMatchPassword, employeeNumber, currentField, currentForm, moneypass;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var emp1 = new Employee();
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var veh1 = new Vehicle();
var Pass = /** @class */ (function () {
    function Pass() {
    }
    return Pass;
}());
var pass1 = new Pass();
/* event listener for enter key */
window.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        onBlur();
    }
}, false);
/* onclick of add employee
    shows name input */
function registerationForm() {
    document.body.style.backgroundColor = "#7FDBFF";
    //Navigation bar none  here
    document.getElementById("addEmp").style.display = "none";
    document.getElementById("userFormProgress").style.display = "block";
    document.getElementById("label").style.display = "block";
    document.getElementById("empName").style.display = "block";
    document.getElementById("ename").focus();
    currentField = "name";
    currentForm = 1;
    var image = document.getElementById("coverImg");
    image.style.display = "none";
}
/*  shows first input of vehcle form */
function vehicleForm() {
    var employeeContact = document.getElementById("ecnumber").value;
    if (!(/^[0-9]{10}$/.test(employeeContact))) {
        document.getElementById("error").innerHTML = "please enter valid contact number";
        //return false;
    }
    else {
        document.getElementById("error").innerHTML = " ";
    }
    document.getElementById("empContact").style.display = "none";
    document.getElementById("next1").style.display = "none";
    currentField = "vehName";
    currentForm = 2;
    document.body.style.backgroundColor = "#FF851B";
    var vehicleName = document.getElementById("vehName");
    document.getElementById("userFormProgress").style.display = "none";
    document.getElementById("vehicleFormProgress").style.display = "block";
    document.getElementById("label").innerHTML = "may I know the name of your vehicle";
    vehicleName.style.display = "block";
    document.getElementById("vname").focus();
    currentField = "vehName";
}
/* opens up the plan and pricing form */
function planForm() {
    document.getElementById("vehicleFormProgress").style.display = "none";
    document.getElementById("planFormProgress").style.display = "block";
    document.body.style.backgroundColor = "#DDDDDD";
    document.getElementById("vehDescription").style.display = "none";
    document.getElementById("next2").style.display = "none";
    document.getElementById("label").innerHTML = "choose currency for your plan";
    document.getElementById("currType").style.display = "block";
    currentField = "currency";
    currentForm = 3;
}
/* on submit of plan and pricing form */
function submitForm() {
    document.getElementById("planFormProgress").style.display = "none";
    document.getElementById("label").innerHTML = "Thank you for registering ";
    document.getElementById("plans").style.display = "none";
    document.getElementById("submit").style.display = "none";
}
/* validating password against weak , moderate and strong */
function validatePassword() {
    var employeePassword = document.getElementById("epass").value;
    document.getElementById("epass").style.borderWidth = "thick";
    if (employeePassword.length < 8) {
        document.getElementById("epass").style.borderColor = "red";
        document.getElementById("error").innerHTML = "password should be of min 8 characters";
        return false;
    }
    else if (!(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(employeePassword))) {
        document.getElementById("epass").style.borderColor = "orange";
        document.getElementById("error").innerHTML = "password should contains Uppercase, Lowercase, Numeric";
        return false;
    }
    else if (employeePassword.length < 11) {
        document.getElementById("epass").style.borderColor = "orange";
        document.getElementById("error").innerHTML = "";
    }
    else {
        document.getElementById("epass").style.borderColor = "green";
        document.getElementById("error").innerHTML = " ";
    }
}
/* switch case for employee  form for switching input fields */
function onBlur() {
    if (currentForm == 2) {
        onBlurForm2();
        return false;
    }
    else if (currentForm == 3) {
        onBlurForm3();
        return false;
    }
    var label = document.getElementById("labelText");
    switch (currentField) {
        case "name":
            emp1.name = document.getElementById("ename").value;
            if (!(/^[A-z ]{2,}$/.test(employeeName))) {
                document.getElementById("error").innerHTML = "please enter valid name";
                return false;
            }
            else {
                document.getElementById("error").innerHTML = " ";
            }
            //for second input field 
            document.getElementById("label").innerHTML = "Hi " + employeeName + " may I know your gender?";
            document.getElementById("empName").style.display = "none";
            document.getElementById("empGender").style.display = "block";
            currentField = "gender";
            break;
        case "gender":
            var employeeGender_1 = document.getElementsByName("egender");
            emp1.gender = document.querySelector('input[name="egender"]:checked').value;
            if ((!employeeGender_1[0].checked) && (!employeeGender_1[1].checked)) {
                document.getElementById("error").innerHTML = "Please select gender";
                return false;
            }
            else {
                document.getElementById("error").innerHTML = " ";
            }
            document.getElementById("label").innerHTML = " You must be having a email Id";
            document.getElementById("empGender").style.display = "none";
            document.getElementById("empEmail").style.display = "block";
            document.getElementById("eemail").focus();
            currentField = "email";
            break;
        case "email":
            var employeeEmail_1 = document.getElementById("eemail").value;
            emp1.email = employeeEmail_1;
            if (!(/^[A-z]+@[A-z]+\.[A-z]+$/.test(employeeEmail_1))) {
                document.getElementById("error").innerHTML = "please enter valid email address";
                return false;
            }
            else {
                document.getElementById("error").innerHTML = " ";
            }
            document.getElementById("label").innerHTML = "Please choose a password";
            document.getElementById("empEmail").style.display = "none";
            document.getElementById("empPass").style.display = "block";
            document.getElementById("epass").focus();
            currentField = "password";
            break;
        case "password":
            var employeePassword = document.getElementById("epass").value;
            emp1.password = employeePassword;
            if (!(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(employeePassword))) {
                document.getElementById("error").innerHTML = "password should contains Uppercase, Lowercase, Numeric and min 8 characters";
                return false;
            }
            else {
                document.getElementById("error").innerHTML = " ";
            }
            document.getElementById("label").innerHTML = "Lets check if you remember your password";
            document.getElementById("empPass").style.display = "none";
            document.getElementById("empCnfrmPass").style.display = "block";
            document.getElementById("ecnfrmpass").focus();
            currentField = "cnfrmpasswrd";
            break;
        case "cnfrmpasswrd":
            var employeePassword = document.getElementById("epass").value;
            var employeeMatchPassword = document.getElementById("ecnfrmpass").value;
            emp1.cnfPassword = employeeMatchPassword;
            if (employeePassword != employeeMatchPassword) {
                document.getElementById("error").innerHTML = "password doesn't match";
                return false;
            }
            else {
                document.getElementById("error").innerHTML = " ";
            }
            document.getElementById("label").innerHTML = "please enter your contact number  ...";
            document.getElementById("empCnfrmPass").style.display = "none";
            document.getElementById("empContact").style.display = "block";
            document.getElementById("next1").style.display = "block";
            document.getElementById("ecnumber").focus();
            currentField = "contact";
            break;
        default:
    }
}
/* switch case for vehicle  form for switching input fields */
function onBlurForm2() {
    switch (currentField) {
        case "vehName":
            var vehicleName = document.getElementById("vname").value;
            veh1.name = vehicleName;
            if (vehicleName == "") {
                document.getElementById("error").innerHTML = "required";
                return;
            }
            document.getElementById("error").innerHTML = " ";
            document.getElementById("vehName").style.display = "none";
            document.getElementById("label").innerHTML = " whats the type of " + vehicleName;
            document.getElementById("vehType").style.display = "block";
            currentField = "vehType";
            break;
        case "vehType":
            var vehicleType = document.getElementById("vtype").value;
            var vehicleName = document.getElementById("vname").value;
            veh1.vehType = vehicleType;
            if (vehicleType == "") {
                document.getElementById("error").innerHTML = "required";
                return;
            }
            document.getElementById("error").innerHTML = " ";
            document.getElementById("vehType").style.display = "none";
            document.getElementById("label").innerHTML = "Mention the number of " + vehicleName;
            document.getElementById("vehNumber").style.display = "block";
            document.getElementById("vnumber").focus();
            currentField = "vehNumber";
            break;
        case "vehNumber":
            var vehNumber = document.getElementById("vnumber").value;
            var vehicleName = document.getElementById("vname").value;
            veh1.vehNumber = vehNumber;
            if (vehNumber == "") {
                document.getElementById("error").innerHTML = "required";
                return;
            }
            document.getElementById("error").innerHTML = " ";
            document.getElementById("vehNumber").style.display = "none";
            document.getElementById("label").innerHTML = "Tell something about " + vehicleName;
            document.getElementById("vehDescription").style.display = "block";
            document.getElementById("videntity").focus();
            document.getElementById("next2").style.display = "block";
            currentField = "vehDescription";
            break;
        default:
    }
}
/* switch case for plan and pricing  form for switching input fields */
function onBlurForm3() {
    switch (currentField) {
        case "currency":
            //   var currencyTypeElement = document.getElementById("currency");
            // var currencyType: string = (<HTMLSelectElement>currencyTypeElement).options[(<HTMLSelectElement>currencyTypeElement).selectedIndex].value;
            pass1.currType = document.getElementById("currType").value;
            var vehicleType = document.getElementById("vtype").value;
            pass1.passType = document.getElementById("plans").value;
            document.getElementById("currType").style.display = "none";
            document.getElementById("label").innerHTML = "choose paln for your " + vehicleType;
            showPrice();
            if (document.getElementById('daily').checked) {
                moneypass = document.getElementById("daily").innerText + " " + document.getElementById("currency").value;
            }
            else if (document.getElementById('monthly').checked) {
                moneypass = document.getElementById("monthly").innerText + " " + document.getElementById("currency").value;
            }
            else {
                moneypass = document.getElementById("yearly").innerText + " " + document.getElementById("currency").value;
            }
            document.getElementById("plans").style.display = "block";
            document.getElementById("submit").style.display = "block";
            currentField = "plan";
            break;
        default:
    }
}
/* showing available plans according to vehicle selected */
function showPrice() {
    var currency = document.getElementById("currency").value;
    var plan = document.getElementById("plans").value;
    document.getElementById("plans").style.display = "block";
    var v = document.getElementById("vehType").value;
    var daily = 5;
    var monthly = 100;
    var yearly = 500;
    if (v == "Motocycle") {
        daily = 10;
        monthly = 200;
        yearly = 1000;
    }
    else if (v == "Car") {
        daily = 20;
        monthly = 500;
        yearly = 3500;
    }
    var cur = currency;
    switch (cur) {
        case "INR":
            document.getElementById("daily").innerHTML = "" + daily;
            document.getElementById("monthly").innerHTML = "" + monthly;
            document.getElementById("yearly").innerHTML = "" + yearly;
            break;
        case "USD":
            document.getElementById("daily").innerHTML = (daily / 71.74).toFixed(2);
            document.getElementById("monthly").innerHTML = (monthly / 71.74).toFixed(2);
            document.getElementById("yearly").innerHTML = (yearly / 71.74).toFixed(2);
            break;
        case "YEN":
            document.getElementById("daily").innerHTML = (daily / 0.68).toFixed(2);
            document.getElementById("monthly").innerHTML = (monthly / 0.68).toFixed(2);
            document.getElementById("yearly").innerHTML = (yearly / 0.68).toFixed(2);
            break;
    }
}
