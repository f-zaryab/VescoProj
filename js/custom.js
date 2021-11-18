/*====================================================
                SERVICES
====================================================*/
$(function() {
    //animate on Scroll//
    new WOW().init();
});

/*====================================================
                WORK
====================================================*/
$(function(){
   $("#work").magnificPopup({
       delegate: 'a', 
       type: 'image',
       gallery: {enabled: true},
   }); 
});

/*====================================================
                TEAM
====================================================*/
$(function(){
   $("#team-members").owlCarousel({
       items: 3,
       autoplay: true,
       smartSpeed: 700,
       loop: true,
       autoplayHoverPause: true,
       
   });
});

/*====================================================
                TESTIMONIAL
====================================================*/
$(function(){
   $("#customer-testimonials").owlCarousel({
       items: 1,
       autoplay: true,
       smartSpeed: 700,
       loop: true,
       autoplayHoverPause: true,
       
       
   });
});

/*====================================================
                    STATS
====================================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*====================================================
                    CLIENTS  
====================================================*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,

    });
});

/*====================================================
                    NAVIGATION  
====================================================*/
//Show/Hide transparent black navigation

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {

            //hide nav
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();

        } else {

            //show nav
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();

        }
    });
});

// Smooth Scroll
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        //get or return id like #about
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});







