$(function () {
    var topBtn = $('.page-top');
    topBtn.hide();
    //スクロールが500に達したらボタンを表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //ゆっくりとスクロールでトップへもどる
    topBtn.click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // トップへ戻るボタン
    $('#top-btn').click(function(){
        $('html,body').animate({ 
          'scrollTop': 0 
        }, 'slow');
    });


    // 任意の場所まで自動でスクロール
  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position 
    }, 500);
  });

});
