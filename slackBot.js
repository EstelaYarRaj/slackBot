
var botkit = require('botkit');
var controller = botkit.slackbot();

var bot = controller.spawn({
 
  token: "xoxb-217287311765-DeXbDaCJ6VSyYJnY97g4I0KK"
 
})
 
bot.startRTM(function(err,bot,payload) {
 
  if (err) {
 
    throw new Error('Could not connect to Slack');
 
  }
 
});
 
controller.hears(["Hello","Hi"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {
 
  bot.reply(message,'Hello, how are you today?');
 
});

controller.hears(["Fine","Doing great"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {
	 
	  bot.reply(message,'Thats good!');
	 
	});
