// function fadeAnime(){
	$('.lineTrigger').each(function(){
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('lineanime');
		}else{
			$(this).removeClass('lineanime');
		}
	});


	$(window).scroll(function (){
		fadeAnime();
	});

	$(window).on('load', function(){
		fadeAnime();
	});
