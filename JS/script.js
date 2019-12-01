// for sequence
var next = document.getElementById("write_content");
var first = document.getElementById("how_long");

firstButton.addEventListener("keyup", moveFirst());

function moveFirst(event) {
    // var code = (event.keyCode ? event.keyCode : event.which);
    if (event == 13) {
        next.style.marginTop = "0px";
        // first.style.marginTop = "-100vh";
        first.style.height = "0px";
        // console.log("hello");
    }
    // if (event.which == 13) {
    //     next.style.marginTop = "0px";
    // } else {
    //     console.log("not called");
    //     // alert("hello")
    // }
}

// For toggling blur
var button = document.getElementById("toggle_blur_button");
var blur = document.getElementById("text_input_container");
var isBlurred = true;

function toggleBlur() {
    if (isBlurred) {
        blur.style.WebkitFilter = "blur(0px)";
        button.innerHTML = "Write";
        isBlurred = false;
        // console.log("toggle");
    } else {
        blur.style.WebkitFilter = "blur(10px)";
        button.innerHTML = "BlindWrite";
        isBlurred = true;
        // console.log("toggle");
    }
}

button.onclick = toggleBlur;

// For Progress Bar
var updateSpeed = 5; // The lower the number, the smoother the animation
var animationDuration = 2; // Set how long the bar will take to move across screen
var i = 0;
function move(time, updateSpeed) {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("loadingBar");
    var width = 1;

    var id = setInterval(frame, updateSpeed);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width += 100/(time*(1000/updateSpeed));
        elem.style.width = width + "%";
      }
    }
  }
}

move(animationDuration, updateSpeed);