$(function(){
	//购物车控制显示
		$(".header-cart").hover(function(){
			$('.cart').css({'background':'#fff','color':'#FF6700'});
			$(".cart-menu").css('display','block');
		},function(){
			$('.cart').css({'background':'#424242','color':'#b0b0b0'});
			$(".cart-menu").css('display','none');
		});
	
	//搜索框失去和获取焦点
		$('.seh-keys').hide();
		$('#search').focus(function(){
			$('#J_Search').addClass('sch-focus');
			$('.hot-words').css('display','none');
			$('.seh-keys').show();
		});
		$('#search').blur(function(){
			$('#J_Search').removeClass('sch-focus');
			$('.hot-words').css('display','block');
			$('.seh-keys').hide();
		});
		
	//导航栏控制显示	
		$(".m-itme").hide();
		$('.nav-child').hover(function(){
			$('.m-itme').children().children().html($(this).find('.itme-list').html());
			$(".m-itme").stop().slideDown(300);	
			},function(){
				$(".m-itme").stop(true,true).slideUp(300);
			});
			
	//一级二级菜单		
		$('.menu-item').hover(function(){
//			$(".menu-item").css('background','');
			$(this).css('background','#FF6700');
			$(this).children('.sub-menu').show();
		},function(){
			$(this).css('background','');
			$(this).children('.sub-menu').hide();
		});

	//图片轮播
		$('.banner-pic li').hide();
		$('.banner-pic li:first').show();
		var i=0;
		var allimg=$('.banner-pic li').length;
		function img_change(){//图片变化
			$('.banner-pic li').eq(i).show().siblings().hide();
			$('.pointer a').eq(i).addClass('z-active').siblings().removeClass('z-active');
		}
		function play(){//自动轮播
	        i+=1;
	        if(i>=allimg){
	            i=0;
	        }
	        img_change();
	    }
	    var timer = setInterval(play, 2000);
	    // 焦点按钮
		$(".pointer a").hover(function(){ 
			clearInterval(timer);
		 	$(this).addClass('z-active').siblings().removeClass('z-active');
		 	i=$(this).index();
		 	$('.banner-pic li').eq(i).show().siblings().hide();
		},function(){
			timer = setInterval(play, 2000);
		});
		//轮播上一张下一张图标控制
		$(".pointer-btn").hover(function(){ //鼠标移上去 停止自动播放
				clearInterval(timer);
			},function(){
				timer = setInterval(play, 2000);
			});
		$(".next").click(function(){//鼠标点击		
			i++;
			if(i>=allimg)i=0;
			img_change();
		});
		$(".prev").click(function(){
			i--;
			if(i<0)i=allimg-1;
			img_change();
		});
		
	//明星商品	
		$(".more-prev").click(function(){
			$('.hot-list').animate({marginLeft:"0"},300);
		})
		$(".more-next").click(function(){
			$('.hot-list').animate({marginLeft:"-1226px"},300);
		})
		
		function run_img(){
			$('.hot-list').animate({marginLeft:"-1226px"},300);
		}
	});
//鼠标经过有阴影

$(".floor_goods_wrap_li").hover(function () {
       $(this).css({"top":"-5px",
           "box-shadow":"0px 15px 30px rgba(0,0,0,0.2)"
       });
},function(){
    $(this).css({"top":"0px",
        "box-shadow":"none"
    });
})

$(".foot_bottom_r").children("span").hover(function(){
    $(this).css({"background":"#ff6700",color:"#fff"});
},function(){
    $(this).css({"background":"none",color:"#ff6700"});
})