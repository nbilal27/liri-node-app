
var keys = require('./keys.js');
var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var fs = require('fs');

var commands = process.argv[2];
var nameInput = '';

getnameInput(doThis);

function getnameInput(callback) {
  for (var i = 3; i < process.argv.length; i++) {
    nameInput += (process.argv[i] + '');
  }
  callback(nameInput);
}

//Determines which commands are being passeg into the argument
function doThis(nameInput) {

var logs = '';

// console.log(nameInput);

if (commands === 'my-tweets') {
  myTweets();
} 
else if 
  (commands === 'spotify-this-song') {
    spotifyThisSong(nameInput);
  }
else if
  (commands === 'movie-this') {
    movieThis(nameInput);
  }

}


//Function to run 'my-tweets' command
function myTweets() {
var myKeys = keys.consumer_key;

var myToken = keys.access_token_key;



var client = new twitter({
  consumer_key: myKeys,
  consumer_secret: 'MEOlgjprxzPgNrE83i1C6v59WTgWKM20TyXoA7yj7A7W3SiAYH',
  access_token_key: myToken,
  access_token_secret: 'W7xlbE9BJCJRl4jYWitFtblAbVEFTPqNDcdmASnHFgQV7'
});

var params = {
  screen_name: 'victorvicellis'
} 
  && 
  {
  count: 20
};
 
 
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
   
    if (!error && response.statusCode === 200) {
      for(i=0; i< tweets.length; i++){
        
        console.log(tweets[i].text);
    }
    }
  });
} 

//function to run spotify-this-song command
function spotifyThisSong(nameInput) {
   var logs = '';

   if (!nameInput) {

    song = 'the sign';  
   }

var spoti = new spotify({
    id: keys.spotifykeys.client_id,
    secret: keys.spotifykeys.client_secret  
   });

   spoti.search({ type: 'track', query: song}, function(err, data) {
    if(err) {
      logs += 'Error: ' + err + '\n';
    }
    else{
      logs = '\n' + 'Artist(s): ' + data.tracks.items[0].name + '\n';
    }
    console.log(logs);
   })
}







