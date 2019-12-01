var button = document.getElementById("toggle_blur");
var blur = document.getElementById("text_input_container");
var isBlurred = true;

function toggleBlur() {
    if (isBlurred) {
        blur.style.WebkitFilter = "blur(0px)";
        isBlurred = false;
    } else {
        blur.style.WebkitFilter = "blur(10px)";
        isBlurred = true;
    }
}

button.onclick = toggleBlur;