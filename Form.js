function checkForm(frm){
    var isValid = true;
    var errMessage = "";

    //name field
    if (frm.Name1.value == ""){
        isValid = false;
        frm.Name1.focus();
        frm.Name1.style.backgroundColor = "#ffccff";
        var name = document.getElementById("errName");
        name.style.display = "inline";
        name.innerHTML = "* required fields are missing";
    }

    //email field
    if (frm.email.value == "" || frm.email.value <= 3){
         isValid = false;
         frm.email.focus();
         frm.email.style.backgroundColor = "#ffccff";
         var name = document.getElementById("errEmail");
         name.style.display = "inline";
         name.innerHTML = "* required fields are missing";
    }
    
    //name validation. Let me know if this part is wrong. Didn't put anything in html page
    inputs = form.getElementsByClassName('InputClassName');
    for (index = 0; index < inputs.length; ++index) {
        if (inputs[index].value==null || inputs[index].value=="" || inputs[index].value.length < 6)
        {
            alert("Field must be 6 characters or more");
                return false;
        }
    }

    //phone numver validation. Let me know if this part is wrong. Didn't put anything in html page
    var phoneNumber;

    function isValid(p) {
    var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    var digits = p.replace(/\D/g, "");
        return phoneRe.test(digits);
    }

    //verifies fields meet the required input
    if (!isValid){
     return isValid;
    } 
    
 }
 
        