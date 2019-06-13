// Toggle Hamburger Menu
function hamburgerToggle(){
     
        var hamburger = document.getElementById("hamburger");
        var showMenu = document.getElementById("topnav");
        
        if (showMenu.style.visibility == "hidden") {
            
            hamburger.src = "Images/close_x.png";
            hamburger.alt = "image of close button"
            showMenu.style.visibility = "visible";
            
        } else {
            
            hamburger.src = "Images/hamburger.png";
            showMenu.style.visibility = "hidden";
        }
}


//Back-To-Top button
window.onscroll = function() {
    
    scrollFunction()
}

function scrollFunction() {
    
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        
        document.getElementById("backToTopBtn").style.display = "block";

    } else {
        
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

document.getElementById("backToTopBtn").addEventListener("click", function(){
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
