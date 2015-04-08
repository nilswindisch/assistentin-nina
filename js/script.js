$('.title-wrap').fitText(0.96);

$('.reference__content').css({
  'position' : 'absolute',
  'top' : '50%',
  'margin-top' : -$('.reference__content').outerHeight()/2
  });

var windowHeight = $(window).height();
if (windowHeight > 400) {
  $('.reference-wrap').addClass('drop');
}