(function(){

	// $(window).resize(function(){
	// 	var W = $(document).width();
		
	// 	if( W <= 770){
	// 		$('.banner-image-01').attr( 'src' , 'images/banner-640-01.jpg');
	// 		$('.banner-image-02').attr( 'src' , 'images/banner-640-02.jpg');
	// 		$('.banner-image-03').attr( 'src' , 'images/banner-640-01.jpg');
	// 		$('.banner-image-04').attr( 'src' , 'images/banner-640-02.jpg');
	// 	}else{
	// 		$('.banner-image-01').attr( 'src' , 'images/banner-2000-01.jpg');
	// 		$('.banner-image-02').attr( 'src' , 'images/banner-2000-02.jpg');
	// 		$('.banner-image-03').attr( 'src' , 'images/banner-2000-01.jpg');
	// 		$('.banner-image-04').attr( 'src' , 'images/banner-2000-02.jpg');
	// 	}
	// })

	var $nav = $('.header .navbar-default');

	//固定导航栏
	$(window).scroll(function(){
		var H = $(document).scrollTop();
		if( H >= 500 ){
			//固定
			$nav.addClass('fixed-top')
		}else{
			//不固定
			$nav.removeClass('fixed-top')
		}
	})

	$(".dropdown").mouseover(function(){
		$(this).addClass('open')
	});

	$(".dropdown").mouseout(function(){
		$(this).removeClass('open')
	});

	/*---品牌介绍图片滑动效果开始---*/
	$(".selected1").mouseover(function(){
		$(this).children('img').attr( 'src' , 'images/brand_introBg1_1.jpg');
	});
	$(".selected1").mouseout(function(){
		$(this).children('img').attr( 'src' , 'images/brand_introBg1_2.jpg');
	});

	$(".selected2").mouseover(function(){
		$(this).children('img').attr( 'src' , 'images/brand_introBg2_1.jpg');
	});
	$(".selected2").mouseout(function(){
		$(this).children('img').attr( 'src' , 'images/brand_introBg2_2.jpg');
	});

	$(".selected3").mouseover(function(){
		$(this).children('img').attr( 'src' , 'images/brand_introBg3_1.jpg');
	});
	$(".selected3").mouseout(function(){
		$(this).children('img').attr( 'src' , 'images/brand_introBg3_2.jpg');
	});

	$(".selected4").mouseover(function(){
		$(this).children('img').attr( 'src' , 'images/brand_introBg4_1.jpg');
	});
	$(".selected4").mouseout(function(){
		$(this).children('img').attr( 'src' , 'images/brand_introBg4_2.jpg');
	});
	

}());