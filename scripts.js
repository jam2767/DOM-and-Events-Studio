// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){

    document.getElementById("takeoff").addEventListener("click", function(){
        shuttleReady = window.confirm("Confirm that the shuttle is ready for takeoff.");
        
        if (shuttleReady = true){
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground".innerHTML = )
        } else if (shuttleReady = false){
            document.getElementById("flightStatus").innerHTML = "Space shuttle ready for takeoff";
        }
    }); 




});

//let takeoff = document.getElementById("takeoff");


