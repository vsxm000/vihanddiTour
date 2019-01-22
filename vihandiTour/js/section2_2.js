
// 遍历li分别注册鼠标进入事件
$('.weather_list li').hover(function(){
  $(this).stop().animate({'width':'48%'}).siblings().stop().animate({'width':'26%'});
  if($(this).index()==0){
    //  $(this).find('img').css({'left':'0'});
  }else if($(this).index()==2){
     // $(this).find('img').css({'right':'0'});
  }
},function(){
  $('.weather_list li').stop().animate({'width':'33%'})
  $('.weather_list li:nth-child(2)').stop().animate({'width':'34%'})
 if($(this).index()==0){
    //  $(this).find('img').css({'left':'-1rem'});
  }else if($(this).index()==2){
   //   $(this).find('img').css({'right':'-1rem'});
  }  

});	

// 第三张
$('.map2_list li').hover(function(){
  $(this).stop().animate({'width':'48%'}).siblings().stop().animate({'width':'26%'});
  if($(this).index()==0){
    //  $(this).find('img').css({'left':'0'});
  }else if($(this).index()==2){
     // $(this).find('img').css({'right':'0'});
  }
},function(){
  $('.map2_list li').stop().animate({'width':'33%'})
  $('.map2_list li:nth-child(2)').stop().animate({'width':'34%'})
 if($(this).index()==0){
    //  $(this).find('img').css({'left':'-1rem'});
  }else if($(this).index()==2){
   //   $(this).find('img').css({'right':'-1rem'});
  }  

});	
