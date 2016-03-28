/*澶撮儴骞垮憡*/
$(function(){
	//alert($)
	var topBan = $("#header_wrap div.top_banner");
	var aClose = $("#header_wrap div.top_banner a.close");
	var banHide = $("#header_wrap div.top_banner div.banner_hide");
	
	$("#header_wrap div.top_banner div.banner_show").click(function(){
		//alert("灞曞紑")
		topBan.animate({"height":"300px"},400);
		aClose.css("display","none");
		banHide.css("display","block");		
	});
	$("#header_wrap div.top_banner div.banner_hide").click(function(){
		//alert("鏀惰捣")
		topBan.animate({"height":"60px"},400);
		aClose.css("display","block");
		$(this).css("display","none");		
	})	
});
/*鎼滅储妗�*/
$(function(){
	var sKeyword = $(".search_input div.search_history");
	$(".search_input input.search_txt").click(function( ){		
		sKeyword.show( );		
	});		
	$(document).mouseout(function( ){		
		sKeyword.hide( );
	});	
});
/*涓€浜岀骇鑿滃崟*/
$(function(){
	var oLi = $(".all_items .all_sort div.sort_menu li");
	var index = 0;
	oLi.hover(function(){
		//alert("閫夋嫨")
		$(this).addClass("sor h3").siblings().removeClass("sor h3");
		i = $(this).index();
		//alert(i)
		$(".sort_detail_list").eq(i).show();
	
	},function(){
		$(".sort_detail_list").eq(i).hide();
		$(this).removeClass("sor h3");
	})	
})

/*棣栭〉杞挱*/
$(function(){
	 var index = 0;	 
	 $('#banner ul li').hover(function(){
		 index = $(this).index();
		 play();
	 });
	 $("#banner").hover(function(){
		$(".btn").show();//
		clearInterval(time);
	},function(){//
		$(".btn").hide();//
		autoPlay();
	});
	$(".next").click(function(){//榧犳爣鐐瑰嚮		
		index++;
		if(index>7)index=0;
		play();
	})

	$(".prev").click(function(){
		index--;
		if(index<0)index=7;
		play();
	})
	function play(){		
		index%=8;//i=i%8浣欏灏�
		$('#banner ul li').eq(index).addClass("on").siblings().removeClass("on");
		var color = $('.pic img').eq(index).attr('data_color');
		$('#banner').css('background',color);
		$('.pic img').eq(index).fadeIn().siblings().fadeOut();		
	}
	 function autoPlay(){
		time = setInterval(function(){
			index++;
			play();
		},2000);
	}
	autoPlay();

	 
 })

 /*tab閫夐」鍗�*/
 $(function(){
	var index = 0;
	$(".content_tab p.tabs a").hover(function(){
		//alert("鐐瑰崱鍏呭€�")
		$(this).addClass("tor").siblings().removeClass("tor");
		i = $(this).index();
		//alert(i)
		$(".tab").eq(i).show().siblings().hide();
	})
	
 })

/*鍟嗗搧娴疯喘鐨勮疆鎾�*/
$(function(){
	var i = 0;
	var auto = null;
	$("ul.slider_ch li").hover(function(){
		//alert("寮€濮嬫捣璐簡锛�")
		$(this).addClass("sai").siblings().removeClass("sai");
		i = $(this).index();
		//alert(i)
		$("ul.slider_box").animate({left:-330*i+"px"},300);		
	})
	$("ul.slider_ch").hover(function(){
		clearInterval(auto);
	},function(){
		play();
	})
	function play(){
		auto = setInterval(function(){
			i++;
			if(i>2) i=0;
			$("ul.slider_ch li").eq(i).addClass("sai").siblings().removeClass("sai");
			$("ul.slider_box").animate({left:-330*i+"px"},300);	
		},2000)
	}
	play();
})
/*闂喘閫夐」鍗�*/
$(function(){
	var i = 0;
	$(".shan_nav ul li").hover(function(){
		//alert("澶х墝鎺ㄨ崘")
		i = $(this).index();
		//alert(i)
		$("this").addClass("cor").siblings().removeClass("cor");
		$(".tabContent").eq(i).show().siblings().hide();
	})
	
	/*婊氬姩鏉＄壒鏁�*/
	var h = $(window).height();//鑾峰彇娴忚鍣ㄧ獥鍙ｇ殑楂樺害
	//console.log("h:"+h/2);
	$(window).scroll(function(){
	
		var $t = $(window).scrollTop();
		//console.log("$t:"+$t);
		if($t>0){
			$("#floor").show();
		}else if($t==0){
			$("#floor").hide();
		}
		
		for(var i = 0;i<10;i++){
			var top = $(".choose_hp").eq(i).offset().top-$t;
			//console.log(top);
			if(top>h/2){
				if(i==0){
					break;
				}else{
					$("#floor a").eq(i-1).children("span").fadeIn().parent().siblings().children("span").fadeOut();
					break;
				}
			}
		}
		
	});
	//杩斿洖椤堕儴
	$("#floor a.top").click(function(){
		$(document).scrollTop(0);
	});

	//鍒锋柊椤甸潰 婊氬姩鏉￠珮搴︿负0
	setTimeout(function(){
		$(document).scrollTop(0);
	},30);
})