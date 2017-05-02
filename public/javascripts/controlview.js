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
