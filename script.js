document.getElementById("explodeBtn").addEventListener("click", function() {
    explode();
});

function explode() {
    var explodeBtn = document.getElementById("explodeBtn");
    explodeBtn.style.animation = "explodeAnimation 1s forwards"; // Adjust animation duration to 5 seconds
    
    setTimeout(function() {
        explodeBtn.style.display = "none";
        showCongrats();
    }, 1000); // Adjust the delay to match animation duration
}


function showCongrats() {
    var congratsText = document.getElementById("congratsText");
    congratsText.style.display = "block";
    congratsText.innerHTML = "Subbed to!<br>OnlyWiegands!";
}
