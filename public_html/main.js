var storyChosen;
var userInputs = [];
var finishedStory = '';
var prompts = {
  'ray': ['First off, what\'s your company name? I mean...you\'re not reading \n\
  this for fun, are you?', 'Adjective', 'Adverb', 'Adjective', 'Plural noun',
  'A number (How \'bout a positive integer?)', 'An article of clothing', 'Body part']
};
var promptIndex = 0;

function build_story_from_input() {
  $(document).prop('title', 'test0');
  switch(storyChosen){
    case 'ray':
      var a1 = 'a ';
      var a2 = 'a ';
      var a3 = 'a ';
      if (/^[aeiouAEIOU]/i.test(userInputs[1])) {a1 = 'an ';}
      if (/^[aeiouAEIOU]/i.test(userInputs[3])) {a2 = 'an ';}
      if (/^[aeiouAEIOU]/i.test(userInputs[6])) {a3 = 'an ';}
      //if (userInputs[1][0] === /^[aeiou]/i){a1 = 'an ';}
      //if (userInputs[3][0] === /[aeiou]/i){a2 = 'an ';}
      //if (userInputs[6][0] === /[aeiou]/i){a3 = 'an ';}
      if (/s$/i.test(userInputs[6])) {a3 = '';}
      $(document).prop('title', 'testinX');
      //return "hi" + a1 + a2 + userInputs[7] + "hiii";
      return "Greetings! My name is Ray Fallon. I am " + a1 + userInputs[1] + 
        " software developer, eager to make my professional start in the \n\
        industry. I'd like to say upfront and without hyperbole that I think " 
        + userInputs[0] + " is the most exciting company in its field \n\
        and is definitely my first choice, bar none. But you " + 
        userInputs[2] + " want to know a little more about me first! \n\
        Well, I'm from Haddon Township, " + a2 + userInputs[3] + " little \n\
        suburb of NJ, affectionately known for its antique " + userInputs[4] + 
        ". I'm the youngest of " + userInputs[5] + " children, which \n\
        probably tells you all you need to know!  HAHA, am I right \n\
        HR-person? Anyway, as long as your developers don't have to wear " +  
        a3 + userInputs[6] + " to work, I think we've got a match! So shoot \n\
        me an email at Raymond.Fallon@" + userInputs[0].toLowerCase() + 
        ".com and we'll get the ball rolling!  Heh, just kidding, email me \n\
        at " + userInputs[1].toLowerCase() + "-Ray@" + 
        userInputs[3].toLowerCase() + userInputs[4].toLowerCase() + ".org. \n\
        (Let me know if your insurance covers Vision or if it's just Dental \n\
        and " + userInputs[7][0].toUpperCase()  + 
        userInputs[7].slice(1).toLowerCase() + " coverage.)";
    default:
      $(document).prop('title', 'testinY');
      return 'whoops';
  }
}

function try_input(phrase) {
    /* TODO Remove empty strings here */
    userInputs.push(phrase);
    if (userInputs.length > 7) {
        $('#zany_build_page').css('display', 'none');
        $('#zany_read_page').css('display', 'inline');
        var finishedStory = build_story_from_input();
        $(document).prop('title', 'test1');
        $('<h4>' + finishedStory + '</h4>').appendTo('#read_area');
        $(document).prop('title', 'test2');
    }
    else {
      promptIndex++;
      $('#pos_text').text(prompts[storyChosen][promptIndex]);
    }
    $('#user_in').val('');
    return false;
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
    $(document).prop('title', $(this).text());
    switch($(this).text()){
      case 'Ray\'s Zany Cover Letter':
        storyChosen = 'ray';
        break;
      case 'Zoo Story':
        storyChosen = 'zoo';
        break;
      case 'Jet-setting':
        storyChosen = 'jet';
        break;
      default:
        storyChosen = 'oh jeez...something\'s gone wrong.';
        break;
    }
    $('#pos_text').text(prompts[storyChosen][0]);
    promptIndex = 0;
  
     /* if ($(this).next().text() === 'Zoo Story') {
          $(document).prop('title', 'Zoo Story');
          storyChosen = 'zoo';
      }
      else if ($(this).next().text() === 'Jet-setting') {
          $(document).prop('title', 'Jet-setting');
          get_user_inputs(1);
      }*/
  });
  $('#enter_button').on('click', function() {
      try_input($('#user_in').val());
  });
  $('#entry_form').submit(function() {
    try_input($('#user_in').val());
    return false;
  });
}

$(document).ready(main);