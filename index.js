enterView({
  selector: "section",
  enter: function (el) {
    el.classList.add("entered");
  },
});

var frameNumber = 0; //start vid at frame 0

playbackConst = 1000; //lower nos means faster playback

setHeight = document.getElementById("set-height");

vid = document.getElementById("v0");

// dynamic height
vid.addEventListener("loadedmetadata", function () {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});

//playback function
function scrollPlay() {
  var frameNumber = window.scrollY / playbackConst;
  vid.currentTime = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);
