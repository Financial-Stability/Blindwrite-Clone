// for sequence
var next = document.getElementById("write_content");
var first = document.getElementById("how_long");

first.addEventListener("keyup", function(event) {
  var keyCode = event.which || event.keyCode;
  if (keyCode == 13) {
    next.style.marginTop = "0px";
    // first.style.marginTop = "-100vh";
    first.style.height = "0px";
    first.style.pointerEvents = "none";
    first.style.color = "transparent";
    move(document.getElementById("time_input").value, updateSpeed);
    // move(animationDuration, updateSpeed);
  }
});

// function moveFirst(event) {
//     // var code = (event.keyCode ? event.keyCode : event.which);
//     if (event == 13) {
//         next.style.marginTop = "0px";
//         // first.style.marginTop = "-100vh";
//         first.style.height = "0px";
//     }
// }

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
    blur.style.WebkitFilter = "blur(1vw)";
    button.innerHTML = "BlindWrite";
    isBlurred = true;
    // console.log("toggle");
  }
}

button.onclick = toggleBlur;

// For Progress Bar
var updateSpeed = 5; // The lower the number, the smoother the animation
// var animationDuration = 2; // Set how long the bar will take to move across screen
var i = 0;
function move(time, updateSpeed) {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("loadingBar");
    var width = 0;

    var id = setInterval(frame, updateSpeed);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        document.getElementById("toggle_blur_button").innerHTML = "Write";
        document.getElementById("text_input_container").style.WebkitFilter = "blur(0px)";
        isBlurred = false;
      } else {
        width += 100 / (time * (60000 / updateSpeed));
        elem.style.width = width + "%";
      }
    }
  }
}
