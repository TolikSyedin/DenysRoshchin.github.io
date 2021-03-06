var str = 'sometimes the same is different';
console.log(str);
console.log(str.lastIndexOf('me'));
console.log(str.length);
console.log(str[16])

$(function() {
	
	$(window).scroll(function() {
    if ($("body").offset().top > 50) {
        $(".header-main").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

	$('.slick').slick({
		dots: false,
		slidesToShow: 4,
    infinite: true,
    leftArrow: true,
    rightArrow: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});

	$('a.page-scroll').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
       event.preventDefault();
    });

});