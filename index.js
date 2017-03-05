$(document).ready(function() {

    document.body.scrollTop = document.documentElement.scrollTop = 0;
    var $nav_bar = $(".navbar");
    var $nav_bar_brand = $("#brand li a");
    var $nav_bar_logo = $(".navbar-logo");
    var $who_are_we = $("#who-are-we .filler");
    var $how_it_works = $("#where .filler");
    var $how_it_works2 = $("#how-it-works .filler");
    var $team = $("#team .filler");
    var $postcard = $("#postcard .filler");
    var $fixed = $(".fixed");
    var top = 50;
    var flag = false;
    var $image = $("#how-it-works .image img");
  //  console.log(top);

  if($(window).width() <= 425) {

        $image.attr("src", "./images/customerjourney.png");
      }


  $("#who").click(function() {
      $('html, body').animate({
          scrollTop: $("#who-are-we").offset().top
      }, 1500);
  });

  $("#how").click(function() {
      $('html, body').animate({
          scrollTop: $("#how-it-works").offset().top
      }, 1500);
  });

  $("#tee").click(function() {
      $('html, body').animate({
          scrollTop: $("#team").offset().top
      }, 1500);
  });

  $("#foot").click(function() {
      $('html, body').animate({
          scrollTop: $("#footer").offset().top
      }, 1500);
  });

  $(".navbar-logo").click(function() {
      $('html, body').animate({
          scrollTop: 0
      }, 1500);
  });



  $("#who").click(function() {
      $('html, body').animate({
          scrollTop: $("#who-are-we").offset().top
      }, 1500);
  });

    function fixnav() {
        $(window).scroll(function(event) {
            var y = $(this).scrollTop();
            if (y >= top) {
                $nav_bar.addClass('fixed');
                $nav_bar_brand.addClass('fixedfont');
                $nav_bar_logo.addClass('fixedlogo');
                if (y >= $who_are_we.offset().top && y < $how_it_works.offset().top) {
                    $nav_bar.css('background-color', $who_are_we.css('background-color'));
                    //console.log(y, $nav_bar.css('background-color'));
                } else if (y >= $how_it_works.offset().top && y < $how_it_works2.offset().top) {
                    $nav_bar.css('background-color', $how_it_works.css('background-color'));
                } else if (y >= $how_it_works2.offset().top && y < $postcard.offset().top) {
                    $nav_bar.css('background-color', $how_it_works2.css('background-color'));
                } else if (y >= $postcard.offset().top && y < $team.offset().top) {
                    $nav_bar.css('background-color', $postcard.css('background-color'));
                } else if (y >= $team.offset().top) {
                    $nav_bar.css('background-color', $team.css('background-color'));
                } else {
                    $nav_bar.css('background-color', '#334D5C');
                }

            }

            else {
                $nav_bar.css('background-color', "");
                $nav_bar.removeClass('fixed');
                $nav_bar_brand.removeClass('fixedfont');
                $nav_bar_logo.removeClass('fixedlogo');
            }
    });
        return false;
    }
    fixnav();
});
