var setup = function(controller){

  // "coffee start 5m" (collect coffee list and end in 5 minutes.)
  // "coffee end"

  controller.hears(['coffee'],'direct_message,mention', function(bot, msg){
    bot.reply(message, 'What would you like in your coffee sir?'+JSON.stringify(msg));
  });

};

module.exports = setup;
