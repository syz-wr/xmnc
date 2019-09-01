$(function(){
	
	$('.xiongmang').mouseenter(function(){
		$('.right').stop().hide()
		$('.right').eq(0).stop().show()
		
		$('.about').eq(0).stop(true,true).slideDown()
	})
	
	$('.xiongmang').mouseleave(function(){
		$('.about').eq(0).stop(true,true).slideUp()
	
	})
	$('.about').eq(0).mouseenter(function(){
		$('.about').eq(0).stop(true,true).show()
	})
	$('.about').eq(0).mouseleave(function(){
		$('.about').eq(0).stop(true,true).slideUp()
	})
	$('.jiameng').mouseenter(function(){
		$('.right').stop().hide()
		$('.right').eq(1).stop().show()
		$('.about').eq(1).stop(true,true).slideDown()
	})
	
	$('.jiameng').mouseleave(function(){
		$('.about').eq(1).stop(true,true).slideUp()
	
	})
	$('.about').eq(1).mouseenter(function(){
		$('.about').eq(1).stop(true,true).show()
	})
	$('.about').eq(1).mouseleave(function(){
		$('.about').eq(1).stop(true,true).slideUp()
	})
	
	$('.news').mouseenter(function(){
	$('.right').stop().hide()
		$('.right').eq(2).stop().show()
		$('.about').eq(2).stop().slideDown()
	})
	
	$('.news').mouseleave(function(){
		$('.about').eq(2).stop().slideUp()
	
	})
	$('.about').eq(2).mouseenter(function(){
		$('.about').eq(2).stop().show()
	})
	$('.about').eq(2).mouseleave(function(){
		$('.about').eq(2).stop().slideUp()
	})
})
