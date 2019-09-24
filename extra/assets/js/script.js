// フォーム
$(function() {
  $("#datepicker").datepicker();
});

// ドロワーメニュー
$(function(){
  $('.menu-button').on('click',function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('.drawer-menu').removeClass('open');
      $('header').removeClass('open');
    } else {
      $(this).addClass('active');
      $('.drawer-menu').addClass('open');
      $('header').addClass('open');
    }
  });
});

// スムーススクロール
$(function() {
  $('a[href^=#]').click(function() {
    var speed = 300;
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var headerHeight = $('header').height();
    var position = target.offset().top - headerHeight;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'linear');
    $('.menu-button').removeClass('active');
    $('.drawer-menu').removeClass('open');
    $('header').removeClass('open');
    return false;
  });
});

// スクロールアニメーション
$(function() {
  $(window).scroll(function() {
    $('.fadein').each(function() {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll > elemPos - windowHeight + (windowHeight / 3)) {
        $(this).addClass('scrollin');
      }
    });
  });
  var scroll = $(window).scrollTop();
  if(scroll >= 1) {
    $(window).ready(function() {
      $('.fadein').addClass('scrollin')
    });
  }
});
