console.log("the bot to solve my twitters has begun.");

var Twit = require('twit');

var config = require('./roquette.js');
var T = new Twit(config);

//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
var params = {
  q: 'rainbow',
  count: 2
}
T.get('search/tweets', params, allTheData );

function allTheData(err, data, response) {
  var tweets = data.statuses;
  for(var i = 0; i < tweets.length; i++ ) {
    console.log(tweets[i].text);
  }

};
