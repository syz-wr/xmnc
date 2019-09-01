

 /*       $(window).scroll(function(){
            // console.log($(this).scrollTop());

            //当window的scrolltop距离大于1时，go to 
            if($(this).scrollTop() > 100){
                $('.backToTop').stop().fadeIn();
                $('.backToTop-wechat').stop().fadeIn()
            }else{
                $('.backToTop').stop().fadeOut();
                $('.backToTop-wechat').stop().fadeOut()
            }
        });

        $('.backToTop').click(function(){
            $('html ,body').animate({scrollTop: 0}, 300);
            return false;
        });*/
        
$(function(){
	$('#leftsead').stop().hide()
	$(window).scroll(function(){
		if ($(this).scrollTop()>100) {
			$('#leftsead').stop().fadeIn()
		}
		else{
			$('#leftsead').stop().fadeOut()
		}
	})
	
	
	
	
 $("#leftsead a").hover(function(){
        if($(this).prop("className")=="youhui"){
            $(this).children("div.hides").show();
        }else{
            $(this).children("div.hides").show();
            $(this).children("div.shows").hide();
            $(this).children("div.hides").animate({marginRight:'0px'},'0'); 
        }
    },function(){ 
        if($(this).prop("className")=="youhui"){
            $(this).children("div.hides").hide();
        }else{
            $(this).children("div.hides").animate({marginRight:'-202px'},0,function(){$(this).hide();$(this).next("div.shows").show();});
        }
    });
    $("#top_btn").click(function(){if(scroll=="off") return;$("html,body").animate({scrollTop: 0}, 600);});
	    //右侧导航 - 二维码
        $(".youhui").mouseenter(function(){
            $(this).children(".2wm").show();
        })
        $(".youhui").mouseleave(function(){
            $(this).children(".2wm").hide();
        });
});

	











