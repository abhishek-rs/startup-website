$(document).ready(function() {

    document.body.scrollTop = document.documentElement.scrollTop = 0;
    var $nav_bar = $(".navbar");
    var $nav_bar_brand = $("#brand li a");
    var $nav_bar_logo = $(".navbar-logo");
    var top = 200;
    var flag = false;

    console.log(top);

    function fixnav() {
        $(window).scroll(function(event) {
            // what the y position of the scroll is
            var y = $(this).scrollTop();
                // whether that's below the form
            if (y >= top) {
                // if so, ad the fixed class
                $nav_bar.addClass('fixed');
                $nav_bar_brand.addClass('fixedfont');

                $nav_bar_logo.addClass('fixedlogo');
            //    $nav_bar_logo.attr('src','logoblack.png');
                //  $(".button").css("color":"white");
            } else if (flag == true) {
                $nav_bar.addClass('fixed');
                $nav_bar_brand.addClass('fixedfont');
                $nav_bar_logo.addClass('fixedlogo');
          //      $nav_bar_logo.attr('src','logoblack.png');

                //  $(".button").css("color":"white");
            } else {
                // otherwise remove it
                $nav_bar.removeClass('fixed');
                $nav_bar_brand.removeClass('fixedfont');

                $nav_bar_logo.removeClass('fixedlogo');
            //    $nav_bar_logo.attr('src','logowhite.png');

                //   $(".button").css("color":"#81BEF7");
            }
        });
        return false;
    }
    fixnav();

/*
    $('.backsies').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });

*/
});
