
$(function(){
	
	var h = decodeURI(window.location.href)
		var n = h.indexOf("#")
		var a = h.substr(n + 1)
		console.log(a)
		
	$('.top').load('son-head.html',function(){
		$('h1').html(a)
		
	})
	$('.iccon').load('icon.html')
	$('footer').load('foot.html')
	
	
	$('.store-pics').mouseenter(function() {
		console.log($(this).index())
		$('.masks').css('display', 'none').eq($(this).index()).css('display', 'block')
		$('.store-pics>img').css('transition', 'all' + ' ' + 4 + 's')
		$('.store-pics').eq($(this).index()).find('img').css('transform', 'rotate(1.14,1.14)')
	})
})



