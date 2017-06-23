var express = require('express');
var botkit = require('botkit');
var botCntrl = botkit.slackbot();
var prompt = require('prompt');
var app = express();
 
app.get('/', function (req, res) {
	prompt.get(['token'], function(err, result){
		console.log('Enter Token :' + result.token);
		var bot = botCntrl.spawn({
			token : result.token 
		})
		console.log('Attempting to connect to Slack...');
		bot.startRTM(function(err,bot,payload){
			if(err){
				throw new Error('Failure to connect')
				res.send('Failed connection to Slack');
			}
			else
			{
				res.send('Connected');
			}
			botCntrl.hears(["Hello","Hi","Good day"], ["direct_message","direct_mention","mention","ambient"], function(bot,message){
				bot.reply(message, "Hello there my name is SlackBot123.")
			})
		})
	});
  
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;




