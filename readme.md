Today we Create Twitter Bot that teach you have to use Twitter Rest Api to create amazing apps with it. ok so lets get started with creating new folder open up your terminal and type

mkdir myapp
cd myapp
npm init
npm install twit --save-dev
This commands create your project folder then go to that folder then make package.json file which is necessary for installing modules in npm next we actually install our twit package which handle all the complected task for us. if you want to learn more go to this url which leads you to the github page of the package.

Ok now you all set to hit the twitter api but before that to query your data in any api need authentication as you see before in my WordPress Api post things like OAuth1 or cookie based authentication in our app we also need authentication so lets get that credentials first go to https://apps.twitter.com/ this will show all your apps. ok cool now click on create new app

App Name : myfirstapp

Description : just see what is special in this Api😉

Website : http://localhost.com

After all the information filled in callback url is not required as you build simple bot. click create your application button and now you see your app click on that app and you find there is tab called Keys and access tokens click on that tab and copy your information this is really important piece of information copy your

Consumer Key (API Key), Consumer Secret (API Secret), Access Token, Access Token Secret
if someone still this information he can do anything with your twitter account ex. posting unrelated content to your twitter account in that case delete the app this will make you safe.
create your index.js file in the root folder and type this code
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var parameter = {
    q: '@AkshayKanya', count: 10 };

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
i will walk you to this code what i written in this index.js file so lets get started

in first line i add the module called twit next i make new file called config.js.

module.exports = {

consumer_key: '...',
consumer_secret: '...',
access_token: '...',
access_token_secret: '...',

}
and fill your credentials in to that empty lines and save this file as config.js then we add this file in to our app next i just create new object from twit package. next code is simple

in the documentation of twit package developer write his code in just one line i kind of break this into more readable form so what i did was create a new object with some parameters in this simple example i just search for tweets so i write parameters like q: it means query and count means how many tweets i want so i want 10 tweets with #AkshayKanya hash tag simple

in next line of code just assemble the call  T.get(‘search/tweets’, parameter, getdata); simply do the get request and pass the parameters and then the callback function which is getdata in this function i setup a for loop that simply go throw the json output and extract the text which is actual tweet and print it into console. and your done that was simple tutorial i ever find. if you still don’t understand how this is helping you in any way then go to this github repo download your the code and do npm install and paste your twitter app credentials and have fun and final thing you can run your app in terminal with this command

node app.js

Thanks