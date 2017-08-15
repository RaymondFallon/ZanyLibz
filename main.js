var storyChosen;
var userInputs = [];
var finishedStory = '';
var prompts = {
  'ray': ['First off, what\'s your company name? I mean...you\'re not reading \n\
  this for fun, are you?', 'Adjective', 'Adverb', 'Adjective', 'Plural noun',
  'A number (How \'bout a positive integer?)', 'An article of clothing', 'Body part'],
  'hero': ['We\'re going to need some characters, right? Let\'s start with \n\
  a boy\'s name.', 'Now balance the scales with a girl\s name.', 'Adjective', 
  'Verb: present participle (that\'s those "ing" ones)', 'An animal', 'Adjective', 
  'An element (natural or periodic... whichever you\'re feeling!)', 'A hobby...\n\
  one of yours, if you want! No pressure.']
};
var lastNames = {
  'a': "Allen",
  'b': "Barker",
  'c': "Crocker",
  'd': "DeLaney",
  'e': "Everett",
  'f': "Faust",
  'g': "Gillibrand",
  'h': "Hill",
  'i': "Ignacious",
  'j': "Jacobi",
  'k': "Kilgore",
  'l': "LeBuff",
  'm': "McGruff",
  'n': "Nixon",
  'o': "Oolong",
  'p': "Parquette",
  'q': "Quest",
  'r': "Roughshot",
  's': "Shade",
  't': "Turner",
  'u': "Umber",
  'v': "Viego",
  'w': "Wallace",
  'x': "Xanthos",
  'y': "Yarbley",
  'z': "Ziggarello",
 }
var promptIndex = 0;

function cleanString(s) {
  s = s.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  return s.replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

function build_story_from_input() {
  switch(storyChosen){
    case 'ray':
      var a1 = 'a ';
      var a2 = 'a ';
      var a3 = 'a ';
      if (/^[aeiouAEIOU]/i.test(userInputs[1])) {a1 = 'an ';}
      if (/^[aeiouAEIOU]/i.test(userInputs[3])) {a2 = 'an ';}
      if (/^[aeiouAEIOU]/i.test(userInputs[6])) {a3 = 'an ';}
      if (/s$/i.test(userInputs[6])) {a3 = '';}
      var compEmail = userInputs[0].toLowerCase().replace(/[\#\s]/g, '');
      compEmail = compEmail.replace(/&apos;/g, '');
      compEmail = compEmail.replace(/&quot;/g, '');
      compEmail = compEmail.replace(/&amp;/g, '');
      compEmail = compEmail.replace(/\$/g, 'S');
      return "Greetings! My name is Ray Fallon. I am " + a1 + 
        userInputs[1].toLowerCase() + " software developer, eager to make my \n\
        professional start in the industry. I'd like to say upfront and \n\
        without hyperbole that I think " + userInputs[0] + " is the most \n\
exciting company in its field and is definitely my first choice, bar none. \n\
But you " + userInputs[2].toLowerCase() + " want to know a little more about me first! \n\
        Well, I'm from Haddon Township, " + a2 + userInputs[3].toLowerCase() + " little \n\
        suburb of NJ, affectionately known for its antique " + userInputs[4].toLowerCase() + 
        ". I'm the youngest of " + userInputs[5].toLowerCase() + " children, which \n\
        probably tells you all you need to know!  HAHA, am I right \n\
        HR-person? Anyway, as long as your developers don't have to wear " +  
        a3 + userInputs[6].toLowerCase() + " to work, I think we've got a \n\
        match! So shoot me an email at Raymond.Fallon@" + compEmail + 
        ".com and we'll get the ball rolling!  Heh, just kidding, email me \n\
        at " + userInputs[1].toLowerCase() + "-Ray@" + 
        userInputs[3].toLowerCase() + userInputs[4].toLowerCase() + ".org. \n\
        (Let me know if your insurance covers Vision or if it's just Dental \n\
        and " + userInputs[7][0].toUpperCase()  + 
        userInputs[7].slice(1).toLowerCase() + " coverage.)";

    case 'hero':
      var boyFirst, boyLast, girlFirst, girlLast, he_lower, He_upper, his, 
              a1, manGood, firstNameGood, lastNameGood, manEvil, firstNameEvil,
              lastNameEvil, animalUpper, elementUpper;
      try {
        boyFirst = userInputs[0][0].toUpperCase() + 
                userInputs[0].slice(1).toLowerCase();
        boyLast = lastNames[userInputs[0][0].toLowerCase()];
        girlFirst = userInputs[1][0].toUpperCase() + 
                userInputs[1].slice(1).toLowerCase();
        girlLast = lastNames[userInputs[1][0].toLowerCase()];
        animalUpper = userInputs[4][0].toUpperCase() + 
                userInputs[4].slice(1).toLowerCase();
        elementUpper = userInputs[6][0].toUpperCase() + 
                userInputs[6].slice(1).toLowerCase();
      }
      catch(err) {
        boyFirst = userInputs[0];
        boyLast = "Parker";
        girlFirst = userInputs[1];
        girlLast = "Wallace";
        animalUpper = userInputs[4];
        elementUpper = userInputs[6];
      }
      var roll = Math.random();
      if (roll < 0.5) {
        // the boy is the hero
        he_lower = 'he';
        He_upper = 'He';
        manGood = '-Man';
        manEvil = '-Woman';
        firstNameGood = boyFirst;
        lastNameGood = boyLast;
        firstNameEvil = girlFirst;
        lastNameEvil = girlLast;
        his = 'his';
      } else {
        // the girl is the hero
        he_lower = 'she';
        He_upper = 'She';
        manGood = '-Woman';
        manEvil = '-Man';
        firstNameGood = girlFirst;
        lastNameGood = girlLast;
        firstNameEvil = boyFirst;
        lastNameEvil = boyLast;
        his = 'her';
      }
      if (/^[aeiouAEIOU]/i.test(userInputs[5])) {a1 = 'an ';}
      else {a1 = 'a ';}
      
      return "It was just an average, " + userInputs[2].toLowerCase() + " day for " +
firstNameGood + " " + lastNameGood + ". " + He_upper + " was quietly " + 
userInputs[3].toLowerCase() + " in the science lab when " + he_lower + " was suddenly \n\
bitten by a radioactive " + userInputs[4].toLowerCase() + "! After some slight\n\
soreness, followed by a 3-day coma, followed by  " + a1 + userInputs[5].toLowerCase() + 
" costume montage, " + firstNameGood + " became the mighty " + animalUpper +
manGood + "! But " + animalUpper + manGood + " wasn't the only wonder to come \n\
out of that science lab--oh no! It was there that a freak " + 
userInputs[6].toLowerCase() + " accident turned " + firstNameEvil + " " + lastNameEvil +
" into the infamous and fearsome " + elementUpper + manEvil + ". " +
elementUpper + manEvil + " was every inch the villain that " + animalUpper + 
manGood + " was the hero. The two were polar opposites--except for their \n\
mutual love of " + userInputs[7].toLowerCase() + "! But can " + animalUpper +
manGood + " harness this " + userInputs[7].toLowerCase() + "-love to turn " +
his + " rival to the right side of the law? Or will their rivalry raze this \n\
city to dust? Find out this summer in: " + firstNameGood + " " + lastNameGood + 
" v. " + firstNameEvil + " " + lastNameEvil + ": Birth of " + 
elementUpper + "-" + animalUpper + ".";
    default:
      $(document).prop('title', 'testinY');
      return 'whoops';
  }
}

function try_input(phrase) {
    // TODO Remove empty strings here 
    phrase = cleanString(phrase);
    no_space_phrase = phrase.replace(/\s*/g, '');
    if (no_space_phrase === ''){$('#user_in').val(''); return false;}
    userInputs.push(phrase);
    if (userInputs.length > 7) {
        $('#zany_build_page').css('display', 'none');
        $('#zany_read_page').css('display', 'inline');
        var finishedStory = build_story_from_input();
        $('<h4>' + finishedStory + '</h4>').appendTo('#read_area');
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
    $(this).css('cursor', 'pointer');
    $(this).css('background-color', 'yellow');
  });
  $('.wel_select').mouseleave(function(){
    $(this).css('background-color', 'transparent');
  });
  $('.wel_opt').mouseenter(function(){
    $(this).css('cursor', 'pointer');
    $(this).css('font-size', '20px');
  });
  $('.wel_opt').mouseleave(function(){
      $(this).css('font-size', '19px');
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
      case 'The Hero\'s Journey':
        storyChosen = 'hero';
        break;
      default:
        storyChosen = 'oh jeez...something\'s gone wrong.';
        break;
    }
    $('#pos_text').text(prompts[storyChosen][0]);
    promptIndex = 0;
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