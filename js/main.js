
//resize section heights on load//

$(document).ready(function() {
        var heightwindow = $(window).height();
        $('#landing, #contact').css('height', heightwindow +'px');
    });

    $(window).resize(function() {
    	var heightwindow = $(window).height();
        $('#landing, #contact').css('height', heightwindow+'px');
    });

$(window).load(function() {
	 $('#loading').fadeOut(1000);
});

//chart description fade//
$(document).ready(function () {
    var i = $(window).width();
    if (i < 820) {
        $("#description .step").each(function () {
            $(this).css({
                opacity: 0,
                visibility: "visible"
            });
        });
    }
    if (i < 820) {
        $(".one").animate({
            opacity: 1
        });
    }
    setTimeout(function () {
        if (i < 820) {
            $(".two").animate({
                opacity: 1
            });
        }}, 200);
    setTimeout(function () {
        if (i < 820) {
            $(".three").animate({
                opacity: 1
            });
        }}, 400);
    setTimeout(function () {
        if (i < 820) {
            $(".four").animate({
                opacity: 1
            });
        }}, 600);
    setTimeout(function () {
        if (i < 820) {
            $(".five").animate({
                opacity: 1
            });
        }}, 800);
});