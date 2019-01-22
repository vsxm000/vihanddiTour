// 1. 对应的楼梯突出显示
// 获取页面的卷去高度

$(window).scroll(function(){
  // 滚动到第二张图时，楼梯出现
  var v = $(window).scrollTop();
  // 第二页距离文档的高度
  var h1 = $('.section2').offset().top;
  if(v >= h1){
    $('.subnav').show();
  }else{
    $('.subnav').hide();
  }
  if(v >= $('.section8').offset().top){
    $('.subnav li').eq(7).addClass('active').siblings().removeClass('active');
    $('.subnav li').find('a').css('visibility','hidden');
    $('.subnav li').eq(7).find('a').css("visibility","visible");
  }else if(v >= $('.section7').offset().top){
    $('.subnav li').eq(6).addClass('active').siblings().removeClass('active');
    $('.subnav li').find('a').css('visibility','hidden');
    $('.subnav li').eq(6).find('a').css("visibility","visible");
  }else if(v >= $('.section6').offset().top){
    $('.subnav li').eq(5).addClass('active').siblings().removeClass('active');
    $('.subnav li').find('a').css('visibility','hidden');
    $('.subnav li').eq(5).find('a').css("visibility","visible");
  }else if(v >= $('.section5').offset().top){
    $('.subnav li').eq(4).addClass('active').siblings().removeClass('active');
    $('.subnav li').find('a').css('visibility','hidden');
    $('.subnav li').eq(4).find('a').css("visibility","visible");
  }else if(v >= $('.section4').offset().top){
    $('.subnav li').eq(3).addClass('active').siblings().removeClass('active');
    $('.subnav li').find('a').css('visibility','hidden');
    $('.subnav li').eq(3).find('a').css("visibility","visible");
  }else if(v >= $('.section3').offset().top){
    $('.subnav li').eq(2).addClass('active').siblings().removeClass('active');
    $('.subnav li').find('a').css('visibility','hidden');
    $('.subnav li').eq(2).find('a').css("visibility","visible");
  }else if(v >= $('.section2').offset().top){
    $('.subnav li').eq(1).addClass('active').siblings().removeClass('active');
    $('.subnav li').find('a').css('visibility','hidden');
    $('.subnav li').eq(1).find('a').css("visibility","visible");
  }

  // 控制卷去的高度
//   if(v > $('.section1').offset().top  && v <= $('.section2').offset().top){
//     $('html,body').stop().animate({scrollTop:('.section2').offset().top},50);
//   }else if(v > $('.section2').offset().top  && v <= $('.section3').offset().top){
//     $('html,body').stop().animate({scrollTop:$('.section3').offset().top},50);
//   }else if(v > $('.section3').offset().top  && v <= $('.section4').offset().top){
//     $('html,body').stop().animate({scrollTop:$('.section4').offset().top},50);
//   }else if(v > $('.section4').offset().top  && v <= $('.section5').offset().top){
//     $('html,body').stop().animate({scrollTop:$('.section5').offset().top},50);
//   }else if(v > $('.section5').offset().top  && v <= $('.section6').offset().top){
//     $('html,body').stop().animate({scrollTop:$('.section6').offset().top},50);
//   }else if(v > $('.section6').offset().top  && v <= $('.section7').offset().top){
//     $('html,body').stop().animate({scrollTop:$('.section7').offset().top},50);
//   }else if(v > $('.section7').offset().top  && v <= $('.section8').offset().top){
//     $('html,body').stop().animate({scrollTop:$('.section8').offset().top},50);
//   }
})
// 2.当点击楼梯时，对应的楼层会出现
$('.subnav').on('click','.nav_li',function(){
  // 获取当前楼梯的索引值
  var index = $(this).index();
  // 获取对应楼层的高
  var h = $('.louceng').eq(index - 1).offset().top;
  // 当前的楼层出现
  $('html,body').stop().animate({scrollTop:h});
  // 当前li的类名改变
  $(this).addClass('current').siblings().removeClass('current');
})
