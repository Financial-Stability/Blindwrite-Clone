// for sequence
var first = document.getElementById("what_topic");
var second = document.getElementById("how_long");
var third = document.getElementById("write_content");

first.addEventListener("keyup", function(event) {
  var keyCode = event.which || event.keyCode;
  if (keyCode == 13) {
    second.style.marginTop = "0px";
    first.style.height = "0px";
    first.style.pointerEvents = "none";
    first.style.color = "transparent";
    document.getElementById("time_input").focus();
    document.getElementById("name").innerHTML =
      document.getElementById("topic_input").value + " ";
  }
});

second.addEventListener("keyup", function(event) {
  var keyCode = event.which || event.keyCode;
  if (keyCode == 13) {
    third.style.marginTop = "5vh";
    second.style.height = "0px";
    second.style.pointerEvents = "none";
    second.style.color = "transparent";
    document.getElementById("text_input").focus();
    move(document.getElementById("time_input").value, updateSpeed);
  }
});

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
        document.getElementById("text_input_container").style.WebkitFilter =
          "blur(0px)";
        document.getElementById("toggle_blur_button").disabled = false;
        isBlurred = false;
      } else {
        width += 100 / (time * (60000 / updateSpeed));
        elem.style.width = width + "%";
      }
    }
  }
}
