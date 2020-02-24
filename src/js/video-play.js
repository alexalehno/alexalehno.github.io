// видео воспроизведение/пауза 

var video = document.querySelector(".video");
var hideBtn = document.getElementById("hide-btn");

var playPause = document.getElementById("play-pause");
var playNow = document.getElementById("play-now");

function togglePlayPause() {
  if (video.paused) {
    hideBtn.classList.add("active");
    
    video.play();
  } else {
    hideBtn.classList.remove("active");
    video.pause();
  }
}

playPause.onclick = function() {
  togglePlayPause();
};

playNow.onclick = function() {
  togglePlayPause();
};





