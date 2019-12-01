// For toggling blur
var button = document.getElementById("toggle_blur_button");
var blur = document.getElementById("text_input_container");
var isBlurred = true;

function toggleBlur() {
    if (isBlurred) {
        blur.style.WebkitFilter = "blur(0px)";
        isBlurred = false;
        // console.log("toggle");
    } else {
        blur.style.WebkitFilter = "blur(10px)";
        isBlurred = true;
        // console.log("toggle");
    }
}

button.onclick = toggleBlur;

// For timer
var i = 0;
function move(time) {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("loadingBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width+= 100/time;
        elem.style.width = width + "%";
      }
    }
  }
}

move(5);