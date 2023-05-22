$(function () {
  $(".tile img").hover(function () {
    $(this).closest('.tile').find('.box').css('flex', '1');
  }, function () {
    // on mouseout, reset the flex size
    $(this).closest('.tile').find('.box').css('flex', '0.5');
  });

  $(".box-container").hover(function () {
    $(this).find('.box').css('flex', '1');
  }, function () {
    $(this).find('.box').css('flex', '0.5');
  });
});
