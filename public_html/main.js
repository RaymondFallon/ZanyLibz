
function get_user_inputs(story) {
    if (story === 0){
        $(document).prop('title', 'Zoo Story');
    }
    else if (story === 1) {
        $(document).prop('title', 'Jet-setting');
    }
    var user_inputs = [];
    for (var i = 0; i < 8; i++){
        
    }
}

function main() {
  $('.wel_subopt').hide();
  $('.wel_opt').on('click', function(){
      $(this).next().slideToggle(100);
  });
  $('.wel_select').mouseenter(function(){
      $(this).css('background-color', 'yellow');
  });
  $('.wel_select').mouseleave(function(){
      $(this).css('background-color', 'transparent');
  });
  $('.wel_opt').mouseenter(function(){
      $(this).css('font-size', '20px');
  });
  $('.wel_opt').mouseleave(function(){
      $(this).css('font-size', '18px');
  });
  $('#theft').on('click', function() {
      $('.headcard').fadeOut(300);
      $('.playzone').fadeOut(500);
      $('#sig').css('font-weight', 'bold');
      $('footer').fadeOut(4000);
  });
  $('#self_write').on('click', function() {
      $('#welcome_page').css('display', 'none');
      $('#selfwrite_page').css('display', 'inline');
  });
  $('.story').on('click', function() {
      $('#welcome_page').css('display', 'none');
      $('#zany_build_page').css('display', 'inline');
      if ($(this).text() === 'Zoo Story') {
          get_user_inputs(0);
      }
      else if ($(this).text() === 'Jet-setting') {
          get_user_inputs(1);
      }
  });
}

$(document).ready(main);