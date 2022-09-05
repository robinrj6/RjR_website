$(document).ready(function() {
    $(".mobile-nav-icon i").click(function() {
        if ($(".mobile-nav-icon .fas").hasClass("fa-bars")) {
            $(".mobile-nav-icon .fas").addClass(" fa-times");
            $(".mobile-nav-icon .fas").removeClass(" fa-bars");


            //    code for displaying the menu
            $('.sticky').css("height", "300px");
            $('.nav-link li').css("display", "block");
            $('.nav-link li').css("padding", "10px 20px");
            $('.nav-link li a').css("font-size", "20px");
            $('.nav-link').css("text-align", "right");

            // automatical close
            setTimeout(() => {
                $(".fas").removeClass(" fa-times");
                $(".fas").addClass(" fa-bars");
                $('.nav-link li').css("display", "none");
                $('.sticky').css("height", "50px");
            }, 5000);

        } else {
            $(".fas").removeClass(" fa-times");
            $(".fas").addClass(" fa-bars");
            $('.nav-link li').css("display", "none");
            $('.sticky').css("height", "50px");
        }
    });

    // $("nav .navbar .mobile-nav-icon .nav-link li").click(function() {
    //     $('.sticky').css("height", "300px");
    // });


    //sticky navigation
    $('.js--section_about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
            $('.navabr').css('background-color', 'rgb(255,255,204)');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
});