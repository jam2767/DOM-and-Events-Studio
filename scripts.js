// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    document.getElementById("takeoff").addEventListener("click", function(){
        if(window.confirm("Confirm that the shuttle is ready for takeoff.")){
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            shuttleHeight = document.getElementById("spaceShuttleHeight").innerHTML;
            newHeight = parseInt(shuttleHeight,10)+10000;
            document.getElementById("spaceShuttleHeight").innerHTML = newHeight;

        } else {
            document.getElementById("flightStatus").innerHTML = "Space shuttle ready for takeoff";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";

        }
        
    }); 

    document.getElementById("landing").addEventListener("click", function(){
        if(window.confirm("The shuttle is landing. Landing gear engaged.")){
            document.getElementById("flightStatus").innerHTML = "The shuttle has landed";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }
    })

    document.getElementById("missionAbort").addEventListener("click", function(){
        if(window.confirm("Confirm that you want to abort the mission")){
            document.getElementById("flightStatus").innerHTML = "Mission aborted";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }
    })

    document.getElementById("up").addEventListener("click", function(){
        shuttleImgUp = document.querySelector("img");
        console.log(shuttleImgUp);
        shuttleImgUp = "10px";
        document.querySelector("img").style.bottom = shuttleImgUp;

    })
};

window.onload = init;

//let takeoff = document.getElementById("takeoff");


