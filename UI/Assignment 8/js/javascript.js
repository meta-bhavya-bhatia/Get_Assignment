/*var employeeName, employeeGender, employeeEmail, 
employeePassword, 
employeeMatchPassword, employeeNumber,currentField,
currentForm,moneypass;  */

let currentForm, currentField,vehicleName,vehicleType,employeePassword;
const empDetail = {}
/* event listener for enter key */
window.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        onBlur();
    }
}, false);


document.getElementById("addEmp").addEventListener("click",function(event){

    document.body.style.backgroundColor = "#7FDBFF";
    empDetail["empName"] = document.getElementById("empName");
    //Navigation bar none  here
    document.getElementById("addEmp").style.display ="none";

    document.getElementById("userFormProgress").style.display ="block";
    document.getElementById("label").style.display = "block";
    empDetail.empName.style.display = "block";
    document.getElementById("ename").focus();

     currentField = "name";
     currentForm = 1;
    document.getElementById("coverImg").style.display = "none";
});

/* onclick of add employee
    shows name input */
   
/*  shows first input of vehcle form */

document.getElementById("vehicle").addEventListener('click',function(event){

    empDetail["employeeContact"] = document.getElementById("ecnumber").value;
    if (!(/^[0-9]{10}$/.test(empDetail.employeeContact))) {
        document.getElementById("error").innerHTML = "please enter valid contact number";
        return false;
    } else {
        document.getElementById("error").innerHTML = " ";
    }

    document.getElementById("empContact").style.display = "none";
    document.getElementById("next1").style.display = "none";

    currentField = "vehName";
    currentForm = 2;

    document.body.style.backgroundColor = "#FF851B";
    vehicleName = document.getElementById("vehName");

    document.getElementById("userFormProgress").style.display ="none";
    document.getElementById("vehicleFormProgress").style.display ="block";
    
    label.innerHTML = "may I know the name of your vehicle";
    vehicleName.style.display = "block";
    document.getElementById("vname").focus();

    currentField = "vehName";
});

/* opens up the plan and pricing form */
document.getElementById("planForm").addEventListener('click',function(event){
    document.getElementById("vehicleFormProgress").style.display = "none";
    document.getElementById("planFormProgress").style.display = "block";

    document.body.style.backgroundColor = "#DDDDDD";
    document.getElementById("vehDescription").style.display = "none";
    document.getElementById("next2").style.display = "none";

    label.innerHTML = "choose currency for your plan";
    document.getElementById("currType").style.display = "block";

    currentField = "currency";
    currentForm = 3;
})


/* on submit of plan and pricing form */
document.getElementById("submitForm").addEventListener('click',function(event) {
    document.getElementById("planFormProgress").style.display ="none";
    label.innerHTML = "Thank you for registering ";

    document.getElementById("plans").style.display = "none";
    document.getElementById("submit").style.display = "none";
});

/* validating password against weak , moderate and strong */
document.getElementById("epass").addEventListener('onclick',function(event) {

    employeePassword = document.getElementById("epass").value;
    document.getElementById("epass").style.borderWidth = "thick";
    if (employeePassword.length < 8) {
        document.getElementById("epass").style.borderColor = "red";
        document.getElementById("error").innerHTML = "password should be of min 8 characters";
        return false;
    } else if (!(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(employeePassword))) {
        document.getElementById("epass").style.borderColor = "orange";
        document.getElementById("error").innerHTML = "password should contains Uppercase, Lowercase, Numeric";
        return false;
    }else if(employeePassword.length < 11){
        document.getElementById("epass").style.borderColor = "orange";
        document.getElementById("error").innerHTML = "";
    } else {
        document.getElementById("epass").style.borderColor = "green";
        document.getElementById("error").innerHTML = " ";
    }

});



/* switch case for employee  form for switching input fields */
function onBlur() {

    if (currentForm == 2){
        onBlurForm2();
        return false;
    } else if (currentForm == 3){
        onBlurForm3();
        return false;
    }
    var label = document.getElementById("labelText");
    switch (currentField) {

        case "name":
            let employeeName = document.getElementById("ename").value;

            if (!(/^[A-z ]{2,}$/.test(employeeName))) {
                document.getElementById("error").innerHTML = "please enter valid name";
                return false;
            }else{
                document.getElementById("error").innerHTML = " ";
            }
            //for second input field 
            label.innerHTML = "Hi " + employeeName + " may I know your gender?";
            document.getElementById("empName").style.display = "none";
            document.getElementById("empGender").style.display = "block";
            currentField = "gender";
            break;

        case "gender":

            let employeeGender = document.getElementsByName("egender");
            if (!employeeGender[0].checked && !employeeGender[1].checked) {
                document.getElementById("error").innerHTML = "Please select gender";
                return false;
            } else {
                document.getElementById("error").innerHTML = " ";
            }

            label.innerHTML = " You must be having a email Id";

            document.getElementById("empGender").style.display = "none";
            document.getElementById("empEmail").style.display = "block";
            document.getElementById("eemail").focus();
            currentField = "email";
            break;

        case "email":
            let employeeEmail = document.getElementById("eemail").value;

            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(employeeEmail))) {
                document.getElementById("error").innerHTML = "please enter valid email address";
                return false;
            } else {
                document.getElementById("error").innerHTML = " ";
            }
            label.innerHTML = "Please choose a password";
            document.getElementById("empEmail").style.display = "none";
            document.getElementById("empPass").style.display = "block";
            document.getElementById("epass").focus();
            currentField = "password";

            break;

        case "password":
             employeePassword = document.getElementById("epass").value;

            if (!(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(employeePassword))) {
                document.getElementById("error").innerHTML = "password should contains Uppercase, Lowercase, Numeric and min 8 characters";
                return false;
            } else {
                document.getElementById("error").innerHTML = " ";
            }

            label.innerHTML = "Lets check if you remember your password";

            document.getElementById("empPass").style.display = "none";
            document.getElementById("empCnfrmPass").style.display = "block";
            document.getElementById("ecnfrmpass").focus();
            currentField = "cnfrmpasswrd";

            break;

        case "cnfrmpasswrd":
              employeePassword = document.getElementById("epass").value;
            let employeeMatchPassword = document.getElementById("ecnfrmpass").value;

            if (employeePassword != employeeMatchPassword) {
                document.getElementById("error").innerHTML = "password doesn't match";
                return false;
            } else {
                document.getElementById("error").innerHTML = " ";
            }
            label.innerHTML = "please enter your contact number  ...";
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
             vehicleName = document.getElementById("vname").value;
            if (vehicleName == "") {
                document.getElementById("error").innerHTML = "required";
                return;
            }
            document.getElementById("error").innerHTML = " ";
            document.getElementById("vehName").style.display = "none";
            label.innerHTML = " whats the type of " + vehicleName;
            document.getElementById("vehType").style.display = "block";
            currentField = "vehType";
            break;

        case "vehType":
             vehicleType = document.getElementById("vtype").value;
            vehicleName = document.getElementById("vname").value;

            if (vehicleType == "") {
                document.getElementById("error").innerHTML = "required";
                return;
            }
            document.getElementById("error").innerHTML = " ";
            document.getElementById("vehType").style.display = "none";
            label.innerHTML = "Mention the number of " + vehicleName;
            document.getElementById("vehNumber").style.display = "block";
            document.getElementById("vnumber").focus();
            currentField = "vehNumber";

            break;

        case "vehNumber":
            vehNumber = document.getElementById("vnumber").value;
             vehicleName = document.getElementById("vname").value;

            if (vehNumber == "") {
                document.getElementById("error").innerHTML = "required";
                return;
            }
            document.getElementById("error").innerHTML = " ";

            document.getElementById("vehNumber").style.display = "none";
            label.innerHTML = "Tell something about " + vehicleName;
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
            let currency = document.getElementById("currency").value;
            let vehicleType = document.getElementById("vtype").value;
            document.getElementById("currType").style.display = "none";
            label.innerHTML = "choose paln for your " + vehicleType;
            showPrice();
            if(document.getElementById('daily').checked){
                moneypass = document.getElementById("daily").innerText+" "+document.getElementById("currency").value;
            }
            else if(document.getElementById('monthly').checked){
                moneypass = document.getElementById("monthly").innerText+" "+document.getElementById("currency").value;
            }
            else{
                moneypass = document.getElementById("yearly").innerText+" "+document.getElementById("currency").value;
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

    currency = document.getElementById("currency").value;
    plan = document.getElementById("plans").value;

    plans.style.display = "block";
    let v = vehType;
    let daily = 5;
    let monthly = 100;
    let yearly = 500;

    if (v == "Motocycle") {
        daily = 10;
        monthly = 200;
        yearly = 1000;
    } else if (v == "Car") {
        daily = 20;
        monthly = 500;
        yearly = 3500;
    }

    var cur = currency;
    switch (cur) {
        case "INR":
            document.getElementById("daily").innerHTML = daily;
            document.getElementById("monthly").innerHTML = monthly;
            document.getElementById("yearly").innerHTML = yearly;
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