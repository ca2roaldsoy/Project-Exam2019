
// fetch upcoming launches
fetch("https://api.spacexdata.com/v3/launches/upcoming")
.then (result => result.json())
.then ((res) => { 
    
        upcomingSpace(res)
})

.catch (error => console.log(error))


// fetch past launches
fetch("https://api.spacexdata.com/v3/launches/past")
.then (result => result.json())
.then ((res) => { 
    
        pastSpace(res)
})

.catch (error => console.log(error))


    function upcomingSpace(result) {

        for (var i=0; i < result.length; i++) {

            var results = result[i];
            var ulitem = document.getElementsByTagName("ul")[2];
            
            var flightNr = results.flight_number;
            var flightDate = results.launch_date_utc.slice(0, -14);
            var flightMission = results.mission_name;
            var flightRocket = results.rocket.rocket_name;
            var rocketType = results.rocket.rocket_type;
            var launchSite = results.launch_site.site_name_long;

            ulitem.innerHTML += "<li>Flight Number: "  + flightNr +  "</li>";
            ulitem.innerHTML += "<li>Date: "  + flightDate +  "</li>";
            ulitem.innerHTML += "<li>Mission: "  + flightMission +  "</li>";
            ulitem.innerHTML += "<li>Rocket: "  + flightRocket +  "</li>";
            ulitem.innerHTML += "<li>RocketType: "  + rocketType +  "</li>";
            ulitem.innerHTML += "<li>Rocket: "  + launchSite +  "</li>";
            
        }       
    }

    function pastSpace(result) {

        for (var i=0; i < result.length; i++) {

            var results = result[i];
            var ulitem = document.getElementsByTagName("ul")[2];
            
            var flightNr = results.flight_number;
            var flightDate = results.launch_date_utc.slice(0, -14);
            var flightMission = results.mission_name;
            var flightRocket = results.rocket.rocket_name;
            var rocketType = results.rocket.rocket_type;
            var launchSite = results.launch_site.site_name_long;

            ulitem.innerHTML += "<li>Flight Number: "  + flightNr +  "</li>";
            ulitem.innerHTML += "<li>Date: "  + flightDate +  "</li>";
            ulitem.innerHTML += "<li>Mission: "  + flightMission +  "</li>";
            ulitem.innerHTML += "<li>Rocket: "  + flightRocket +  "</li>";
            ulitem.innerHTML += "<li>RocketType: "  + rocketType +  "</li>";
            ulitem.innerHTML += "<li>Rocket: "  + launchSite +  "</li>";
            
        }       
    }

