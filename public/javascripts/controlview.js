$(function(){

  $('#header').click(function(){
    if($(window).width() < 768){
      $('.btn-nav').click();
    }
  });

  $('.infobutton').click(function(){
    var targetinfo = $(this).attr("target");
    var button = $(this);
    $(targetinfo).slideToggle(function(){
      button.text("Show Projects...");
      button.append("<span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-down\"></span>");
      if($(this).is(":visible")){
        button.text("Hide Projects...");
        button.append("<span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-up\"></span>");
      }
    });
  });

  $('.techimg').mouseenter(function(){
    $(this).css('opacity', '1');
  }).mouseleave(function(){
    $(this).css('opacity', '0.5');
    $(this).find('.info').hide();
    $(this).find('.image').show();
  }).click(function(){
    $(this).find('.info').show();
    $(this).find('.image').hide();
  });

  $('#hidereferences').click(function(){
    var referencesinfo = document.getElementById('referencesinfo');
    var success = referencesinfo.parentNode.removeChild(referencesinfo);
  });

  function offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 90);
    }
  }

  $(document).on('click', 'a[href^="#"]', function(event) {
    window.setTimeout(function() {
      offsetAnchor();
    }, 0);
  });

  window.setTimeout(offsetAnchor, 0);

 });
