$(function(){
	$('.top').load('son-head.html',function(){
			$('h1').html(a)
		})
		$('.iccon').load('icon.html')
		$('footer').load('foot.html')
			var h = decodeURI(window.location.href)
		var n = h.indexOf("#")
		var a = h.substr(n + 1)	
})