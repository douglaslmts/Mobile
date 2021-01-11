var x = document.getElementById("divbody")

window.onload = function() {
    redimenciona()
};

window.addEventListener('resize', function() { redimenciona() })

function redimenciona() {
    x.style.margin = "0px auto";
    x.style.textAlign = "center";
    x.style.backgroundColor = "";
    x.style.border = "solid";
    x.style.width = window.innerWidth - 100 + "px";
    x.style.height = window.innerHeight - 20 + "px";
    x.style.color = "whitblacke";
    x.style.fontFamily = "Arial";
    x.style.fontSize = "12px";
}