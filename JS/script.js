var button = document.getElementById("toggle_blur");
var blur = document.getElementById("text_input_container");

function doMe() {
    blur.style.blur("0px");
}


button.onclick = doMe;