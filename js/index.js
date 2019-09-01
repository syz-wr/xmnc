$(function() {
		new CusScrollBar({
		contentSelector: '.scroll_cont', //滚动内容区
		barSelector: '.scroll_bar', //滚动条
		sliderSelector: '.scroll_slider' //滚动滑块
	});
	$('header').load('head.html')
	$('footer').load('foot.html')
	$('.rocket').load('backToTop.html')
//头部轮播图
	$('.slide_content').css({
		'width': $(window).innerWidth()
	})
	$('.slide_box').css({
		'width': $(window).innerWidth() * 3
	})
	$('.slide_box>li').css({
		'width': $(window).innerWidth()
	})

	var clock;
	var timer;
	var n = 0
         clock=setTimeout(function(){
         	
         	$('.slide_text').eq(0).stop().animate({
         		'top':80
         	},1000)
         	
         	
         },1000)
		timer = setInterval(function() {
		n++
		if(n > 2) {
			n = 0
		}
		$('.slide_box').stop().animate({
			'left': -$(window).innerWidth() * n
		}, function() {
			$('.slide_text').stop().animate({
				"top": -465
			}, 100).eq(n).stop().animate({
				"top": 80
			}, 1000)
		})

		$('.cirs').removeClass('bgc').eq(n).addClass('bgc')
		$('.cirs').css('transform','scale(1,1)')
		$('.cirs').eq(n).css('transform','scale(1.5,1.5)')

	}, 3000)

	$('.slide_content').mouseenter(function() {
		clearInterval(timer)
	})
	$('.slide_content').mouseleave(function() {
		timer = setInterval(function() {
			n++
			if(n > 2) {
				n = 0
			}
			$('.slide_box').stop().animate({
				'left': -$(window).innerWidth() * n
			},function(){
				$('.slide_text').stop().animate({
				"top": -600
			}, 100).eq(n).stop().animate({
				"top": 80
			}, 1000)
			})

			$('.cirs').removeClass('bgc').eq(n).addClass('bgc')
			$('.cirs').css('transform','scale(1,1)')
			$('.cirs').eq(n).css('transform','scale(1.5,1.5)')

			
		}, 3000)
	})

	$('.round>li').click(function() {
		var i = $(this).index()
		$('.slide_box').stop().animate({
			'left': -$(window).innerWidth() * i
		}, function() {
			$('.slide_text').stop().animate({
				"top": -465
			}, 100).eq(i).stop().animate({
				"top": 80
			}, 1000)

		})

		$('.cirs').removeClass('bgc').eq(i).addClass('bgc')
	$('.cirs').css('transform','scale(1,1)')
		$('.cirs').eq(i).css('transform','scale(1.5,1.5)')

	})

//主体部分mask

$('.main-1-ri-pic').mouseenter(function(){
	$('.mask').stop().fadeOut().eq($(this).index()).stop().fadeIn(1000)
})

$('.main-1-ri-pic').mouseleave(function(){
	$('.mask').stop().fadeOut()
})






//柱状图
$('.one1').stop().animate({
	"height":10
})

$('.two1').stop().animate({
	"height":22
})

$('.three1').stop().animate({
	"height":34
})
$('.four1').stop().animate({
	"height":55
})
$('.five1').stop().animate({
	"height":510
},2000)


//小轮播图

var m=0;
$('.next').click(function(){
	m++
	if (m>5) {
		m=0
	}
	$('.shift-content').stop().animate({
		"left":-m*310
	})
	
	
})
$('.prev').click(function(){
	m--
	if (m<0) {
		m=5
	}
	$('.shift-content').stop().animate({
		"left":-m*310
	})
	
	
})



//投资
$('.touzi input').click(function(){
	$('.money').stop().show()
})



$('.money li').eq(0).click(function(){
	$('.touzi input').val('5万-10万')
	$('.money').stop().hide()
})
$('.money li').eq(1).click(function(){
	$('.touzi input').val('10万-20万')
	$('.money').stop().hide()
})
$('.money li').eq(2).click(function(){
	$('.touzi input').val('20万-50万')
	$('.money').stop().hide()
})













$('.main-more-1').click(function(){
	window.open('company.html#公司简介')
})

$('.main-more-2').click(function(){
	window.open('contact.html#加盟申请')
})







})