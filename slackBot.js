var botkit = require('botkit');
var botCntrl = botkit.slackbot();

var bot = botCntrl.spawn({
	token : 'xoxb-200336080708-kVd39lkezl4ITKxqsCcIR35J'
})

bot.startRTM(function(err,bot,payload){
	if(err){
		throw new Error('Failure to connect')
	}
	botCntrl.hears(["Hello","Hi","Good day"], ["direct_message","direct_mention","mention","ambience","mention"], function(bot,message){
		bot.reply(message, "Hello there my name is SlackBot123.")
	})
})
