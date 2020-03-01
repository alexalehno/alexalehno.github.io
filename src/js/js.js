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
    autoplay: false,
    autoplaySpeed: 1000,
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
  autoplay: false,
  autoplaySpeed: 800,
  arrows: false,
  asNavFor: ".skills-slider"
});

$(".skills-slider").slick({
  dots: false,
  arrows: false,
  asNavFor: ".team-slider"
});


// .......................аккардеон............................................

$("[data-collapse]").on("click", function(event) {
  event.preventDefault();

  var $this = $(this),
    blockId = $this.data("collapse");

  $this.toggleClass("active");
  $(blockId).slideToggle();
});
