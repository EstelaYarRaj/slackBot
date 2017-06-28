var request = require('supertest');
var app = require('../slackbot.js');

describe ('GET/',function(){
	it('responds with Attempting to connect to Slack...', function(done){
		request(app).get('/').expect('Attempting to connect to Slack...');
		done();
})
})
	
