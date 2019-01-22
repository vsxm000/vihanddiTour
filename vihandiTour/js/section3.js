// 定义一个索引
var index = 0;
// 【右侧按钮实现轮播下一项】
$('.section3 .arrow-right').click(function () {
  // 找到轮播当前项，弹出另一项
  $('.section3 .slides').eq(index).css('display','block').siblings().css('display','none');
  // 找到当前的小点，样式恢复默认
  $('.section3 .dot li').eq(index).find('span').removeClass('current');
  index++;
  // 限制索引
  if (index > $('.section3 .slides').length - 1) {
    index = 0;
  }


  $('.section3 .slides').eq(index).css('display','block').siblings().css('display','none');
  // 找到当前的小点，样式突出显示
  $('.section3 .dot li').eq(index).find('span').addClass('current');

});
// 【左侧按钮实现轮播上一项】
$('.section3 .arrow-left').click(function () {
  // 找到轮播当前项，淡出隐藏
  // $('.section3 .slides').eq(index).fadeOut(300);
  $('.section3 .slides').eq(index).css('display','block').siblings().css('display','none')
  // 找到当前的小点，样式恢复默认
  $('.section3 .dot li').eq(index).find('span').removeClass('current');
  index--;
  // 限制索引
  if (index < 0) {
    index = $('.section3 .slides').length - 1;
  }

  // 下一个轮播项淡入显示
  // $('.section3 .slides').eq(index).fadeIn(300);
  $('.section3 .slides').eq(index).css('display','block').siblings().css('display','none');
  // 找到当前的小点，样式突出显示
  $('.section3 .dot li').eq(index).find('span').addClass('current');

});


// 【点击小点切换】
// 给小点注册事件
$('.section3 .dot li').click(function () {
  // 找到轮播当前项，淡出隐藏
  // $('.section3 .slides').eq(index).fadeOut(300);
  $('.section3 .slides').eq(index).css('display','block').siblings().css('display','none');
  // 找到当前的小点，样式恢复默认
  $('.section3 .dot li').eq(index).find('span').removeClass('current');
  // 获取当前小点的索引，更改index
  index = $(this).index();
  // 下一个轮播项淡入显示
  // $('.section3 .slides').eq(index).fadeIn(300);
  $('.section3 .slides').eq(index).css('display','block').siblings().css('display','none');
  // 找到当前的小点，样式突出显示
  $('.section3 .dot li').eq(index).find('span').addClass('current');
});
var timer;
function autoPlay() {
  timer = setInterval(function(){
    $('.section3 .arrow-right').click();
  }, 2000)
}
autoPlay();

// 鼠标进入轮播区停止自动轮播
 $('.section3 .slides').mouseenter(function(event) {
   clearInterval(timer);
 });

// 鼠标离开轮播区开启自动轮播
 $('.section3 .slides').mouseleave(function(event) {
   autoPlay();
 });