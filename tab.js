$(function(){
    // ①タブをクリックしたら発動
    $('.btn_area').on('click', function(){
      // ②タブの切り替え
      $('.active').removeClass('active');
      $(this).addClass('active');
      // ③タブを切り替えて表示するコンテンツ
      var index = $('.btn_area').index(this);
      $('.panel_area').removeClass('active').eq(index).addClass('active');
    });
  });
