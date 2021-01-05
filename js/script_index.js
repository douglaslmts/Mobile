var x = document.getElementById("divbody")
var

    window.onload = function() {
    redimenciona()
};

window.addEventListener('resize', function() { redimenciona() })

function redimenciona() {
    x.style.backgroundColor = "blueviolet";
    x.style.width = window.innerWidth - 0.5 + "px";
    x.style.height = window.innerHeight + "px";
}