$(function(){
	$('#dowebok').fullpage({
		sectionsColor: ['#1bbc9b', '#E8C51E', '#7BAABE', '#f90','pink', '#7BAABE', 'skyblue'],
		afterLoad: function(anchorLink, index){
			if(index == 2){
				$('.section2').find('p').delay(500).animate({
					right: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 3){
				$('.section3').find('p').delay(500).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 4){
				$('.section4').find('p').fadeIn(2000);
			}
			if(index == 5){
				$('.section5').find('p').delay(500).animate({
					right: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 6){
				$('.section6').find('p').delay(500).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 7){
				$('.section7').find('p').fadeIn(2000);
			}
		},
		onLeave: function(index, direction){
			if(index == '2'){
				$('.section2').find('p').delay(500).animate({
					right: '-180%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '3'){
				$('.section3').find('p').delay(500).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '4'){
				$('.section4').find('p').fadeOut(2000);
			}
			if(index == '5'){
				$('.section5').find('p').delay(500).animate({
					right: '-180%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '6'){
				$('.section6').find('p').delay(500).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '7'){
				$('.section7').find('p').fadeOut(2000);
			}
		}
	});
	
});

