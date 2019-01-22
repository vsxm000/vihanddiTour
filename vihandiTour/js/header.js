
window.onload = function () {
    //顶部固定导航栏
    var top_nav = document.querySelector(".top_nav");
    var top_pic = document.querySelector(".top_pic");
    // 获取页面顶端的距离
     var t = top_nav.offsetTop;
  
     document.onscroll = function () {
         //获取当前滚动的距离
         var btop = document.body.scrollTop || document.documentElement.scrollTop;
         if (btop > t) {
            top_nav.style.position = 'fixed';
            top_nav.style.top = '0';
         } else {
            top_nav.style.position = 'static';
         }
     }


}