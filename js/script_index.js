var x = document.getElementById("div1")
var a = document.getElementById("div2")

window.onload = function() {
    redimenciona()
};

window.addEventListener('resize', function() { redimenciona() })

function redimenciona() {
    x.style.margin = "0px auto";
    x.style.backgroundColor = "";
    x.style.border = "";
    x.style.width = window.innerWidth - 10 + "px";
    x.style.height = window.innerHeight - 10 + "px";
    x.style.color = "whitblacke";
    x.style.fontFamily = "Arial";
    x.style.fontSize = "12px";

    a.style.backgroundColor = "#9C32DB";
    a.style.textAlign = "center";
    a.style.width = "100%";
    a.style.height = "300px";
    a.style.fontSize = "200px";
    a.style.color = "white";

}