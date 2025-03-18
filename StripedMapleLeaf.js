 
function Soundplay() {
    document.getElementById("sound").play();
}

function setup(){
    document.getElementById("page").addEventListener("click" , Soundplay , false);
}

function backLandPage() {
    window.location.href = "index.html"; 
}