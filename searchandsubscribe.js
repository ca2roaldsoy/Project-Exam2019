//Toggle subscription form
var input = document.getElementById("subscribe").getElementsByTagName("input");
var label = document.getElementById("subscribe").getElementsByTagName("label");

document.getElementById("subscription").addEventListener("click", function () {
    
    for (var i=0; i < input.length; i++) {
        
        var inputs = input[i];
        
         if (inputs.style.display === "block") {
        
            inputs.style.display = "none"
    
        } else {
        
            inputs.style.display = "block"
        }
        
    }
    
    for (var j=0; j < label.length; j++) {
        
        var labels = label[j];
        
         if (labels.style.display === "block") {
        
            labels.style.display = "none"
    
        } else {
        
            labels.style.display = "block"
        }
    }
    
    })

//Validate subscription form
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
    

//Search Launches
document.getElementById("searchBtn").addEventListener("click", function(event) {
    
    event.preventDefault()
        
var searchInput = document.getElementById("searchbar").getElementsByTagName("input")[0];
var tr = document.getElementsByTagName("tr");
var filter = searchInput.value.toUpperCase();   
  
    for (var i=0; i < tr.length; i++) {
        
     var td1 = tr[i].getElementsByTagName("td")[0]; //Flight Number column
     var td2 = tr[i].getElementsByTagName("td")[1]; //Date column
     var td3 = tr[i].getElementsByTagName("td")[2]; //Mission column
     var td4 = tr[i].getElementsByTagName("td")[3]; //Rocket column
        
        if (td1) {
                
            
            var txtValue1 = td1.textContent || td1.innerText;
            var txtValue2 = td2.textContent || td2.innerText;
            var txtValue3 = td3.textContent || td3.innerText;
            var txtValue4 = td4.textContent || td4.innerText;
           
            var text1 = txtValue1.toUpperCase().indexOf(filter) > -1;
            var text2 = txtValue2.toUpperCase().indexOf(filter) > -1;
            var text3 = txtValue3.toUpperCase().indexOf(filter) > -1;
            var text4 = txtValue4.toUpperCase().indexOf(filter) > -1;
           
    
                if (text1 || text2 || text3 || text4) {
                    
                    tr[i].style.display = "";

                } else {
                    
                    tr[i].style.display = "none";
                   
                }
        }
    }
    
})

