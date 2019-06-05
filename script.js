var hamburger_tracker = "f";
var showMenu = document.getElementById("topnav");

function hamburgerToggle(){
     
      var hamburger = document.getElementById("hamburger");
        
        if (hamburger_tracker == "f") {
            
            hamburger.src = "Images/close_x.png";
            hamburger_tracker = "t";
            showMenu.style.visibility = "visible";
            
        
        } else {
            
            hamburger.src = "Images/hamburger.png";
            hamburger_tracker = "f"
            showMenu.style.visibility = "hidden";
        }
}