$(document).ready(function() {

    document.body.scrollTop = document.documentElement.scrollTop = 0;
    var $nav_bar = $(".navbar");
    var $nav_bar_brand = $("#brand li a");
    var $nav_bar_logo = $(".navbar-logo");
    var $who_are_we = $("#who-are-we .filler");
    var $how_it_works = $("#where .filler");
    var $how_it_works2 = $("#how-it-works .filler");
    var $team = $("#team .filler")
    var $fixed = $(".fixed");
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
                if( y >= $who_are_we.offset().top && y < $how_it_works.offset().top){
                  $nav_bar.css('background-color', $who_are_we.css('background-color'));
                  //console.log(y, $nav_bar.css('background-color'));
                }
                else if (y>=$how_it_works.offset().top && y < $how_it_works2.offset().top) {
                  $nav_bar.css('background-color', $how_it_works.css('background-color'));
                }
                else if (y>=$how_it_works2.offset().top && y < $team.offset().top){
                  $nav_bar.css('background-color', $how_it_works2.css('background-color'));
                }
                else if (y>=$team.offset().top ){
                  $nav_bar.css('background-color', $team.css('background-color'));
                }

                else {
                  $nav_bar.css('background-color', '#334D5C');
                }

            }

            else {
               // otherwise remove it
               $nav_bar.css('background-color', "");
               $nav_bar.removeClass('fixed');
               $nav_bar_brand.removeClass('fixedfont');

               $nav_bar_logo.removeClass('fixedlogo');
           //    $nav_bar_logo.attr('src','logowhite.png');

               //   $(".button").css("color":"#81BEF7");
           }



                //  $(".button").css("color":"white");



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
