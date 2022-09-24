let homeScore = 0;
let guestScore = 0;
let homeScoreDisplay = document.getElementById("home-score");
let guestScoreDisplay = document.getElementById("guest-score");

function homeAdd1(){
    homeScore+= 1;
    homeScoreDisplay.textContent=homeScore;
}

function homeAdd2(){
    homeScore+= 2;
    homeScoreDisplay.textContent=homeScore;
}

function homeAdd3(){
    homeScore+= 3;
    homeScoreDisplay.textContent=homeScore;
}

//////////Guest scores 

function guestAdd1(){
    guestScore+= 1;
    guestScoreDisplay.textContent=guestScore;
}

function guestAdd2(){
    guestScore+= 2;
    guestScoreDisplay.textContent=guestScore;
}

function guestAdd3(){
    guestScore+= 3;
    guestScoreDisplay.textContent=guestScore;
}

//////////Reset
function reset(){
    homeScore = 0;
    guestScore = 0;
    homeScoreDisplay.textContent=homeScore;
    guestScoreDisplay.textContent=guestScore;
}