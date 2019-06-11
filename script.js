var hamburger_tracker = "f";
var showMenu = document.getElementById("topnav");
var subscribe = document.getElementById("subscribe");
var thankYouMsg = document.getElementById("thanksMsg");
var input = document.getElementById("subscribe").getElementsByTagName("input");
var label = document.getElementById("subscribe").getElementsByTagName("label");
var submitBtn = input[2]; //target submit button on subscribe form
var searchBtn = document.getElementById("searchbar").getElementsByTagName("input")[1];
var searchInput = document.getElementById("searchbar").getElementsByTagName("input")[0];
var tr = document.getElementsByTagName("tr");
var th = document.getElementsByTagName("th");
var tableUpcoming = document.getElementById("upcoming");
var tablePast = document.getElementById("past");


// Toggle Hamburger Menu
function hamburgerToggle(){
     
      var hamburger = document.getElementById("hamburger");
        
        if (hamburger_tracker == "f") {
            
            hamburger.src = "Images/close_x.png";
            hamburger.alt = "image of close button"
            hamburger_tracker = "t";
            showMenu.style.visibility = "visible";
            
        
        } else {
            
            hamburger.src = "Images/hamburger.png";
            hamburger_tracker = "f"
            showMenu.style.visibility = "hidden";
        }
}


//Toggle subscription form
function subscript(){
    
    for (var i=0; i < input.length; i++) {
        
        var inputs = input[i];
        
         if (inputs.style.display === "block") {
        
            inputs.style.display = "none"
    
        } else {
        
            inputs.style.display = "block"
            thankYouMsg.style.display = "none";
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
}

    function subscribeBtn() {
    
    thankYouMsg.style.display = "block";   
    
    }


fetch("https://api.spacexdata.com/v3/launches/upcoming")
.then (result => result.json())
.then ((res) => { 
    
        upcomingSpace(res)
})

.catch (error => console.log(error))

    function upcomingSpace(result) {

        for (var i=0; i < result.length; i++) {

            var results = result[i];
            console.log(results);
            var flightNr = results.flight_number;
            var flightDate = results.launch_date_utc.slice(0, -14);
            var flightMission = results.mission_name;
            var flightRocket = results.rocket.rocket_name;
            var tableRow = document.createElement("tr");
            var tdFlightNr = document.createElement("td");
            var tdFlightMission = document.createElement("td");
            var tdFlightDate = document.createElement("td");
            var tdFlightRocket = document.createElement("td");
            tableUpcoming.appendChild(tableRow);
            tableRow.appendChild(tdFlightNr);
            tableRow.appendChild(tdFlightDate);
            tableRow.appendChild(tdFlightMission);
            tableRow.appendChild(tdFlightRocket);
            
            tdFlightNr.innerHTML += flightNr;
            tdFlightDate.innerHTML += flightDate;
            tdFlightMission.innerHTML += flightMission;
            tdFlightRocket.innerHTML += flightRocket;

            }
    }

fetch("https://api.spacexdata.com/v3/launches/past")
.then (result => result.json())
.then ((res) => { 
    
        pastSpace(res)
})

.catch (error => console.log(error))

    function pastSpace(result) {

        for (var i=0; i < result.length; i++) {

            var results = result[i];
            console.log(results);
            var flightNr = results.flight_number;
            var flightDate = results.launch_date_utc.slice(0, -14);
            var flightMission = results.mission_name;
            var flightRocket = results.rocket.rocket_name;
            var tableRow = document.createElement("tr");
            var tdFlightNr = document.createElement("td");
            var tdFlightMission = document.createElement("td");
            var tdFlightDate = document.createElement("td");
            var tdFlightRocket = document.createElement("td");
            tablePast.appendChild(tableRow);
            tableRow.appendChild(tdFlightNr);
            tableRow.appendChild(tdFlightDate);
            tableRow.appendChild(tdFlightMission);
            tableRow.appendChild(tdFlightRocket);
            
            tdFlightNr.innerHTML += flightNr;
            tdFlightDate.innerHTML += flightDate;
            tdFlightMission.innerHTML += flightMission;
            tdFlightRocket.innerHTML += flightRocket;

            }
    }



//Search Launches
function userSearch() {
    
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
}

subscribe.addEventListener("click", subscript); //clicking subscription button
submitBtn.addEventListener("click", subscribeBtn); //clicking subscribe button
searchBtn.addEventListener("click", userSearch); //clicking search button








