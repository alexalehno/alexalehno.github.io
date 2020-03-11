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

// ................. ТАБЫ СЕКЦИЯ PROJECTS..........................

var navProjects = document.querySelector(".nav-projects");
var projects = document.querySelector(".projects");

var buttonProjects = navProjects.querySelectorAll("button");
var projectsItem = projects.querySelectorAll("img");

navProjects.addEventListener("click", function() {
  if (event.target.tagName != "BUTTON") {
    return;
  } else if (event.target.classList.contains("active")) {
    return;
  }

  for (var i = 0; i < buttonProjects.length; i++) {
    if (buttonProjects[i].classList.contains("active")) {
      buttonProjects[i].classList.remove("active");
    }
    event.target.classList.add("active");
  }
  // .................................................

  for (var i = 0; i < buttonProjects.length; i++) {
    if (
      buttonProjects[i].classList.contains("active") &&
      buttonProjects[i].classList.contains("photo")
    ) {
      for (var i = 0; i < projectsItem.length; i++) {
        if (
          projectsItem[i].classList.contains("web-design") ||
          projectsItem[i].classList.contains("branding") ||
          projectsItem[i].classList.contains("mobile-app")
        ) {
          projectsItem[i].classList.add("hidden");
        } else projectsItem[i].classList.remove("hidden");
      }
    } else if (
      buttonProjects[i].classList.contains("active") &&
      buttonProjects[i].classList.contains("design")
    ) {
      for (var i = 0; i < projectsItem.length; i++) {
        if (
          projectsItem[i].classList.contains("photography") ||
          projectsItem[i].classList.contains("branding") ||
          projectsItem[i].classList.contains("mobile-app")
        ) {
          projectsItem[i].classList.add("hidden");
        } else projectsItem[i].classList.remove("hidden");
      }
    } else if (
      buttonProjects[i].classList.contains("active") &&
      buttonProjects[i].classList.contains("brand")
    ) {
      for (var i = 0; i < projectsItem.length; i++) {
        if (
          projectsItem[i].classList.contains("photography") ||
          projectsItem[i].classList.contains("web-design") ||
          projectsItem[i].classList.contains("mobile-app")
        ) {
          projectsItem[i].classList.add("hidden");
        } else projectsItem[i].classList.remove("hidden");
      }
    } else if (
      buttonProjects[i].classList.contains("active") &&
      buttonProjects[i].classList.contains("app")
    ) {
      for (var i = 0; i < projectsItem.length; i++) {
        if (
          projectsItem[i].classList.contains("photography") ||
          projectsItem[i].classList.contains("web-design") ||
          projectsItem[i].classList.contains("branding")
        ) {
          projectsItem[i].classList.add("hidden");
        } else projectsItem[i].classList.remove("hidden");
      }
    } else if (
      buttonProjects[i].classList.contains("active") &&
      buttonProjects[i].classList.contains("all")
    ) {
      for (var i = 0; i < projectsItem.length; i++) {
        if (
          projectsItem[i].classList.contains("photography") ||
          projectsItem[i].classList.contains("web-design") ||
          projectsItem[i].classList.contains("branding") ||
          projectsItem[i].classList.contains("mobile-app")
        ) {
          projectsItem[i].classList.remove("hidden");
        }
      }
    }
  }

  // ......................................
});
