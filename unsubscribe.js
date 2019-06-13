//Validate subscription form

    var input = document.getElementById("unsubscribe").getElementsByTagName("input");
    var label = document.getElementById("unsubscribe").getElementsByTagName("label");
    
    for (var i=0; i < input.length; i++) {}
    
    for (var j=0; j < label.length; j++) {}
    

document.getElementById("submit").addEventListener("click", function () {
        
    var thankYouMsg = document.getElementById("thanksMsg");
    var submitBtn = document.getElementById("submit");
    var name = input[0].value;
    var email = input[1].value;
    var nameRegEx = new RegExp (input[0].pattern);
    var emailRegEx = new RegExp (input[1].pattern);
    var userName = nameRegEx.test(name);
    var userEmail = emailRegEx.test(email);
    var err_name = document.getElementById("err_text_name")
    var err_email = document.getElementById("err_text_email")
    
    if (userName == false) {
        
        err_name.innerHTML = "Please enter name";
        err_name.style.color = "red";
        return false;
    }
        
    if (userEmail == false) {
        
        err_email.innerHTML = "Please enter correct email adress";
        err_email.style.color = "red";
        return false;
    }
        
        thankYouMsg.style.display = "block";
        err_name.innerHTML = " ";
        err_email.innerHTML = " ";
        label[0].style.display = "none";
        label[1].style.display = "none";
        input[0].style.display = "none";
        input[1].style.display = "none";
        submitBtn.style.display = "none";
    
        return true;
    })