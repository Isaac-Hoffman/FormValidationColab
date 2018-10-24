function checkForm(frm){
    var isValid = true;
    var errMessage = "";
    //name field
    if (frm.Name.value == "" || frm.Name.value.length < 6){
        isValid = false;
        frm.Name.focus();
        frm.Name.style.backgroundColor = "#f76067";
        var name = document.getElementById("errName");
        name.style.display = "inline";
        name.innerHTML = "* required fields are missing";
    }
    else{
        var name = document.getElementById("errPhone");
        name.innerHTML = "";
    }
    //email field
    if (frm.email.value == "" || /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/.test(frm.email.value) == false){
         isValid = false;
         frm.email.focus();
         frm.email.style.backgroundColor = "#f76067";
         var nameEmail = document.getElementById("errEmail");
         nameEmail.style.display = "inline";
         nameEmail.innerHTML = "* required fields are missing";
    }
    else{
        var email = document.getElementById("errPhone");
        email.innerHTML = "";
    }
    //check for selected radio
    var radios = ["One","Two","Three","Four"];
    var i;
    var selectRad = "";
    for (i = 0; i < radios.length; i++) {
        if (document.getElementById(radios[i]).checked) {
            selectRad = radios[i]
        }
    }
    listBoxSelect = document.getElementById("lstBox").selectedIndex;
    //phone number validation
    var phoneNumber = document.getElementById("num").value;

    if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phoneNumber)){
        var phone = document.getElementById("errPhone");
        phone.innerHTML = "";
    }
    else{
    isValid = false;
    frm.PhoneNum.style.backgroundColor = "#f76067";
    var phone = document.getElementById("errPhone");
    phone.style.display = "inline";
    phone.innerHTML = "* required fields are missing";
    }
    //verifies fields meet the required input
    return isValid;
 }