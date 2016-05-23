$(window).scroll(function() {
    if ($(document).scrollTop() > 250) {
	   	$(".page-name").fadeIn();
	   	}
	   	else {
	    $(".page-name").fadeOut();
      }
});

$(document).ready(function() {
	$(".read-more").click(function() {
		$(".read-more").fadeOut();
	});
});