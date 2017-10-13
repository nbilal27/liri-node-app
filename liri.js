var keys = require('./keys.js');

var commands = process.argv[2];

if (commands === 'my-tweets'){

var myKeys = keys.consumer_key;

var myToken = keys.access_token_key;

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: myKeys,
  consumer_secret: 'MEOlgjprxzPgNrE83i1C6v59WTgWKM20TyXoA7yj7A7W3SiAYH',
  access_token_key: myToken,
  access_token_secret: 'W7xlbE9BJCJRl4jYWitFtblAbVEFTPqNDcdmASnHFgQV7'
});

var params = {screen_name: 'victorvicellis'};
 
 
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
   
    if (!error && response.statusCode === 200) {
      for(i=0; i< tweets.length; i++){
        
        console.log(tweets[i].text);
    }
    }
  });
}



