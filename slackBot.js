var botkit = require('botkit');
var botCntrl = botkit.slackbot();

var bot = botCntrl.spawn({
	token : /** get from slack app **/
})

bot.startRTM(function(err,bot,payload){
	if(err){
		throw new Error('Failure to connect')
	}
	botCntrl.hears(["Hello","Hi","Good day"], ["direct_message","direct_mention","mention","ambient"], function(bot,message){
		bot.reply(message, "Hello there my name is SlackBot123.")
	})
})
