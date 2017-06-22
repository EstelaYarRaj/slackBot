var botkit = require('botkit');
var botCntrl = botkit.slackbot();

System.out.println("Enter token: ");

Scanner reader = new Scanner(System.in);
string userToken = reader.nextString();
reader.close();

var bot = botCntrl.spawn({
	token : userToken;
})

bot.startRTM(function(err,bot,payload){
	if(err){
		throw new Error('Failure to connect')
	}
	botCntrl.hears(["Hello","Hi","Good day"], ["direct_message","direct_mention","mention","ambient"], function(bot,message){
		bot.reply(message, "Hello there my name is SlackBot123.")
	})
})
