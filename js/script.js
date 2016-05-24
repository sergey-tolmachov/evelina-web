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


$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top-150;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });
});


$(document).ready(function(){
    $("#mail").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top-150;
        
        $('body,html').animate({scrollTop: top}, 1000);
    });
});