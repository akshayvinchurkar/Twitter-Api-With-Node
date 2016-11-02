var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

var parameter = { 
	q: '@AkshayKanya', 
	count: 10 
};

T.get('search/tweets', parameter, getdata);

function getdata(err, data, response) {
	if (err) {
		console.log('something is not good' + "\n");
	} else {
		var tweets = data.statuses;
		var size = tweets.length;
		for (var i = 0; i < size; i++) {
			console.log(tweets[i].text);
		};
	}
}