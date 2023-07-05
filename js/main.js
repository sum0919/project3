$(function(){
	// 1) navigation
	$(".nav > ul > li").hover(
		function(){
			$(this).find("ul").stop().slideDown(300);
		},
		function(){
			$(this).find("ul").stop().slideUp(300);
		}
	);
	$(".nav > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
		$(this).next("ul").slideDown(300);
	});
	$(".nav ul ul li:last-child a").focusout(function(){
		$(this).parent().parent().parent().removeClass("active");
		$(this).parent().parent().slideUp(300);
	});

	// 2) gallery
	var n=0;
	var index=0;
	var total=4

	$(".gallery li").eq(n).addClass("active");
	$(".num_control li").eq(n).addClass("active");

	function setGallery(){
		$(".gallery li").removeClass("active");
		$(".gallery li").eq(n).addClass("active");
		$(".num_control li").removeClass("active");
		$(".num_control li").eq(n).addClass("active");
	}
	function intervalMoving(){
		if(n < (total-1)){
			n=n+1;
		}
		else{
			n=0;
		}
		setGallery();
	}

	var id=setInterval(intervalMoving, 5000);

	$(".num_control li").click(function(e){
		e.preventDefault();
		index=$(this).index();

		if(n != index){
			n=index;
			setGallery();
		}
	});
	$(".num_control li").hover(
		function(){
			clearInterval(id);
		},
		function(){
			id=setInterval(intervalMoving, 5000);
		}
	);

	// lnb
	$(".lnb .lnb_close").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
	});

	// go top
	var t=0;

	$(window).scroll(function(){
		t=$(window).scrollTop();

		if(t > 100){
			$("#etc .top").fadeIn(300);
		}
		else{
			$("#etc .top").fadeOut(300);
		}
	});
	$("#etc .top").click(function(e){
		e.preventDefault();
		$("html").delay(300).animate({scrollTop: 0}, 500);
	});
});