
$(function(){
  $('.tab-panels .tabs li').on('click', function(){

    var panel = $(this).attr('rel')
  $('.tab-panels .panel.active').slideUp(300, function(){
    $(this).removeClass('active');
    $('#'+panel).slideDown(300,function(){
      $(this).addClass('active')
    })
  })

  })
})
