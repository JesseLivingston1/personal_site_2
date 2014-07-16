
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
