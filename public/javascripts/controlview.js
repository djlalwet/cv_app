$(function(){

  $('#header').click(function(){
    $('.btn-nav').click();
  });

  $('#readmorenokia').click(function(){
    console.log("read more nokia");
    $('#infonokia').show();
    $('#readlessnokia').show();
    $('#readmorenokia').hide();
  });

  $('#readlessnokia').click(function(){
    console.log("read less nokia");
    $('#infonokia').hide();
    $('#readlessnokia').hide();
    $('#readmorenokia').show();
  });

  $('#readmorecanon').click(function(){
    $('#infocanon').show();
    $('#readlesscanon').show();
    $('#readmorecanon').hide();
  });

  $('#readlesscanon').click(function(){
    $('#infocanon').hide();
    $('#readlesscanon').hide();
    $('#readmorecanon').show();
  });

  $('.techimg').mouseenter(function(){
    $(this).css('opacity', '1');

  });

  $('.techimg').mouseleave(function(){
    $(this).css('opacity', '0.5');
    $(this).find('.info').hide();
    $(this).find('.image').show();
  });

  $('.techimg').click(function(){
    $(this).find('.info').show();
    $(this).find('.image').hide();
  });

  $('#hidereferences').click(function(){
    var referencesinfo = document.getElementById('referencesinfo');
    var success = referencesinfo.parentNode.removeChild(referencesinfo);
  });

  // The function actually applying the offset
  function offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 90);
    }
  }

  // Captures click events of all <a> elements with href starting with #
  $(document).on('click', 'a[href^="#"]', function(event) {
    // Click events are captured before hashchanges. Timeout
    // causes offsetAnchor to be called after the page jump.
    window.setTimeout(function() {
      offsetAnchor();
    }, 0);
  });

  // Set the offset when entering page with hash present in the url
  window.setTimeout(offsetAnchor, 0);
     // var navMain = $(".navbar-collapse"); // avoid dependency on #id
     // // "a:not([data-toggle])" - to avoid issues caused
     // // when you have dropdown inside navbar
     // navMain.on("click", "a:not([data-toggle])", null, function () {
     //     navMain.collapse('hide');
     // });

 });

