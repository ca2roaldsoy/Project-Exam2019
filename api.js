
// fetch past launches
fetch("https://api.spacexdata.com/v3/launches/past")
.then (result => result.json())
.then ((res) => { 
    
        space(res)
})

.catch (error => console.log(error))

// fetch upcoming launches
fetch("https://api.spacexdata.com/v3/launches/upcoming")
.then (result => result.json())
.then ((res) => { 
    
        space(res)
})

.catch (error => console.log(error))

    function space(result) {

        for (var i=0; i < result.length; i++) {

            var results = result[i];
            var launchTable = document.getElementById("launchTable");
            var flightNr = results.flight_number;
            var flightDate = results.launch_date_utc.slice(0, -14);
            var flightMission = results.mission_name;
            var flightRocket = results.rocket.rocket_name;
            var flightType = results.rocket.rocket_type;
            var launchSite = results.launch_site.site_name_long;
            
            var tdFlightNr = document.createElement("td");
            var tdFlightMission = document.createElement("td");
            var tdFlightDate = document.createElement("td");
            var tdFlightRocket = document.createElement("td");
            var tableRow = document.createElement("tr");
            var ulitem = document.createElement("ul");
            var moreLaunch = document.getElementById("launch_article");
            
            ulitem.className = "moreInfo";
            ulitem.style.listStyleType = "none";
            tableRow.id = "launchItem" + i;
            
            launchTable.appendChild(tableRow);
            tableRow.appendChild(tdFlightNr);
            tableRow.appendChild(tdFlightDate);
            tableRow.appendChild(tdFlightMission);
            tableRow.appendChild(tdFlightRocket);
            tableRow.appendChild(ulitem);
    
            tdFlightNr.innerHTML += flightNr;
            tdFlightDate.innerHTML += flightDate;
            tdFlightMission.innerHTML += flightMission;
            tdFlightRocket.innerHTML += flightRocket;
            
            if(results.details === null) {
                
                results.details = "unknown"
            }
            
            tableRow.addEventListener("click", launch)

         }
        
         function launch(e) {
                
                if(e.target !== e.currentTarget) {
                    
                    var launch = document.getElementsByTagName("tr");
                    var launchId = e.target.parentNode.id;
                    var table = document.getElementsByTagName("table")[0];
                    var moreInfo = document.querySelector(".moreInfo");
                    table.style.right = "200px";
                    table.style.position = "relative";
                    
                    for (var i=0; i < launch.length; i++) {
 
                        if (launchId === "launchItem" + i) {

                            moreInfo.innerHTML += "<li><b>Details</b>: " + result[i].details + "</li><br />";
                            moreInfo.innerHTML += "<li><b>Flight Number</b>: " + result[i].flight_number + "</li><br />";
                            moreInfo.innerHTML += "<li><b>Launch Date</b>: " + result[i].launch_date_utc.replace("T", " ").replace ("Z", " ").slice(0, 19) + "</li><br />";
                            moreInfo.innerHTML += "<li><b>Mission Name</b>: " + result[i].mission_name + "</li><br />";
                            moreInfo.innerHTML += "<li><b>Rocket Name</b>: " + result[i].rocket.rocket_name + "</li><br />";
                            moreInfo.innerHTML += "<li><b>Rocket Type</b>: " + result[i].rocket.rocket_type + "</li><br />";
                            moreInfo.innerHTML += "<li><b>Launch Site</b>: " + result[i].launch_site.site_name_long + "</li><br />";
                        }

                     } 
                    
                        if (moreInfo.style.display === "block") {
        
                            moreInfo.style.display = "none";
                            moreInfo.innerHTML = "";
                            table.style.right = "0px";
    
                     } else {
        
                            moreInfo.style.display = "block";
                     }
        
                }
                    
                    e.stopPropagation
        }
            
    }