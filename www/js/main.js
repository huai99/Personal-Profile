$(document).ready(function () {
    var naviTitle = $(".nav-title");
    var naviBar = $(".navbar-fixed-top");
    var section3 = $(".s-section-3");
    var section4 = $(".s-section-4");
    var section5 = $(".s-section-5");

    var position3 = section3.position().top;
    var position4 = section4.position().top;
    var position5 = section5.position().top;
    console.log(section3.position().top);
    //Now when scroll event trigger do following
    var lastScroll = 0;
    $(window).scroll(function () {
        var windowpos = $(window).scrollTop();

        if (windowpos > 400) {
            naviTitle.hide();
        } else {
            naviTitle.show();
        }

     /*   if (inRange(windowpos, position3, 110)) {
            naviTitle.show();
            naviTitle.css("color", "black");
        } else if (inRange(windowpos, position4, 110)) {
            naviTitle.show();
            naviTitle.css("color", "black");
        } else if (inRange(windowpos, position5, 110)) {
            naviTitle.show();
            naviTitle.css("color", "black");
        } else {
            naviTitle.css("color", "white");
        }*/
    });
});

const inRange = function (input, targetPosition, margin) {
    return (input > targetPosition && input < targetPosition + margin);
};