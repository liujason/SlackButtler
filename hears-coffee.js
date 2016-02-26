var setup = function(controller){

  // "coffee start 5m" (collect coffee list and end in 5 minutes.)
  // "coffee end"

  controller.hears(['coffee'],['ambient'], function(bot, message){
    bot.startConversation(message, askSize);
  });
  var askSize = function (response, convo){
    convo.ask('What size would you like?', function(response, convo){
      convo.say('(taking note -'+response.text+')');
      askFlavor(response, convo);
      convo.next();
    });
  };
  var askFlavor = function (response, convo){
    convo.ask ('What would you like in your coffee?', function(response, convo){
      convo.say('got it, '+response.text);
      convo.next();
    });
  };
};

module.exports = setup;
