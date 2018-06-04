var body = document.getElementById("bdy");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");


color1.addEventListener("input", changeBgrndClr);

color2.addEventListener("input",changeBgrndClr);

function changeBgrndClr() {
    //console.log(color2.value);
    body.style.background = "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    h3.textContent = body.style.background;
}

