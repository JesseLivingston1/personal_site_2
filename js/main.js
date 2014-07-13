
//resize section heights on load//

$(document).ready(function() {
        var heightwindow = $(window).height();
        $('#landing').css('height', heightwindow +'px');
    });

    $(window).resize(function() {
    	var heightwindow = $(window).height();
        $('#landing').css('height', heightwindow+'px');
    });
