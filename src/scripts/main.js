$(document).ready(function() {
  // бургер меню. добавляем active
  
  $(".burger-menu").click(function(event) {
    $(".burger-menu, nav").toggleClass("active");
  });

  // удаляем active 
  $("section, footer, nav").click(function(event) {
    $(".burger-menu, nav").removeClass("active");
  });

  // 1 - слайдер heading
  $(".heading-slider").slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 1300,
    arrows: true
  });
});


/////////////// меню /////////////////
$(function() {
  var header = $("#header"),
    introH = $("#about").innerHeight(),
    scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH - 400) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
});


// .................smooth scroll..........

$("[data-scroll]").on("click", function(event) {
  event.preventDefault();

  var $this = $(this),
    blockId = $this.data("scroll"),
    blockOffset = $(blockId).offset().top - 80;

  $("#nav a").removeClass("active");
  $this.addClass("active");

  $("html, body").animate(
    {
      scrollTop: blockOffset
    },
    1000
  );
});


// .............2 - слайдер clients-slider...........

$(".clients-slider").slick({
  dots: false,
  autoplay: false,
  autoplaySpeed: 500,
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true      
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


// ............3 - 4 -слайдер team-slider,  skills-slider..............

$(".team-slider").slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  asNavFor: ".skills-slider"
});

$(".skills-slider").slick({
  dots: false,
  arrows: false,
  asNavFor: ".team-slider"
});


// слайдер features

$(".features").slick({
  dots: false,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 770,
      settings: {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true      
      }
    },
    {
      breakpoint: 575,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// .......................аккардеон............................................

$("[data-collapse]").on("click", function(event) {
  event.preventDefault();

  var $this = $(this),
    blockId = $this.data("collapse");

  $this.toggleClass("active");
  $(blockId).slideToggle();
});

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

});
