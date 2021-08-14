var matter = 0;
var rp = 0;
var cost = 10;
var drills = 0;
var lastUpdate = Date.now();

function increment(){
    matter++;
}

function buyDrill(){
    if (matter >= cost){
        matter -= cost;
        drills++;
        cost *= 1.15;
    }
}

function rebuild(){
    if (matter >= 1000){
        rp += Math.floor((Math.log10(matter) - 2));
        matter = 0;
        drills = 0;
        cost = 10;
    } else {
        alert("Why would you wanna do that!?");
    }
}

function displayGUI(){
    document.getElementById("numText").innerHTML = "You have eliminated " + Math.floor(matter) + " matter.";
    document.getElementById("costText").innerHTML = "Cost : " + Math.floor(cost);
    document.getElementById("amount").innerHTML = "Amount : " + Math.floor(drills);
    document.getElementById("rpText").innerHTML = "You have : " + Math.floor(rp) + " Rebuild Points.";
    document.getElementById("rebuildButton").innerHTML = "Do a Rebuild and gain " + Math.floor(Math.max((Math.log10(matter) - 2),0)) + " Rebuild Points.";
}

function productionLoop(diff){
    matter+=drills * diff * (rp+1);
}

function mainLoop(){
    var diff = (Date.now() - lastUpdate) / 1000;    
    productionLoop(diff);
    displayGUI();
    lastUpdate = Date.now();
}

setInterval(mainLoop, 50);
