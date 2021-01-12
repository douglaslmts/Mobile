var x = document.getElementById("div1")
var a = document.getElementById("div2")
var b = document.getElementById("div3")
var c = document.getElementById("div4")


window.onload = function() {
    redimenciona()
};

window.addEventListener('resize', function() { redimenciona() })

function redimenciona() {
    x.style.margin = "150px auto";
    x.style.backgroundColor = "#9900cc";
    x.style.border = "";
    x.style.width = window.innerWidth + "px";
    x.style.height = window.innerHeight + "px";
    x.style.color = "white";
    x.style.fontFamily = "font-family: Graphik-Medium, Graphik-Regular, 'Gotham SSm A', 'Gotham SSm B', 'Helvetica Neue', Helvetica, Arial, sans-serif";
    x.style.fontSize = "300%";
    x.style.fontWeight = "bold";
    x.style.height = window.innerHeight - 300 + "px";
    x.style.width = window.innerWidth - 100 + "px";

    a.style.backgroundColor = "white";
    a.style.marginTop = "50px";
    a.style.border = "";
    a.style.textAlign = "left";
    a.style.width = "100%";
    a.style.height = "400px";
    a.style.borderRadius = "10px";

    b.style.backgroundColor = "white";
    b.style.textAlign = "left";
    b.style.border = "";
    b.style.fontFamily = "font-family: Graphik-Medium, Graphik-Regular, 'Gotham SSm A', 'Gotham SSm B', 'Helvetica Neue', Helvetica, Arial, sans-serif";
    b.style.width = "100%";
    b.style.marginTop = "50px";
    b.style.height = "400px";
    b.style.fontSize = "200px";
    b.style.color = "white";
    b.style.borderRadius = "10px";

    c.style.backgroundColor = "white";
    c.style.border = "";
    c.style.textAlign = "center";
    c.style.width = "100%";
    c.style.marginTop = "50px";
    c.style.height = "400px";
    c.style.fontSize = "200px";
    c.style.color = "white";
    c.style.borderRadius = "10px";
}