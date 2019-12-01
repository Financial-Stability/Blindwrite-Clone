// For toggling blur
var button = document.getElementById("toggle_blur_button");
var blur = document.getElementById("text_input_container");
var isBlurred = true;

function toggleBlur() {
    if (isBlurred) {
        blur.style.WebkitFilter = "blur(0px)";
        isBlurred = false;
        console.log("toggle");
    } else {
        blur.style.WebkitFilter = "blur(10px)";
        isBlurred = true;
        console.log("toggle");
    }
}

button.onclick = toggleBlur;