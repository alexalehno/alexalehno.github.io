// видео воспроизведение/пауза

var video = document.querySelector("video");
var playVideo = document.getElementById("play-video");
var playNow = document.getElementById("play-now-btn");

function togglePlayPause() {
  if (video.paused) {
    playVideo.classList.add("active");

    video.play();
  } else {
    playVideo.classList.remove("active");
    video.pause();
  }
}

playVideo.onclick = function() {
  togglePlayPause();
};

playNow.onclick = function() {
  togglePlayPause();
};
