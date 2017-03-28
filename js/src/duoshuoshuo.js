/**
 * Created by SIMON on 2017/3/28.
 */
<!--崩溃欺骗-->
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    $('[rel="icon"]').attr('href', "/img/TEP.ico");
    document.title = '╭(°A°`)╮ 页面崩溃啦 ~ | 南金东箭！';
    clearTimeout(titleTime);
  }
  else {
    $('[rel="icon"]').attr('href', "/favicon.ico");
    document.title = '(ฅ>ω<*ฅ) 噫又好了~' + OriginTitile;
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});
