var keys = require('./keys.js');

var myKeys = keys.consumer_key;
var myToken = keys.access_token_key;

console.log("", myKeys);

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: "865Q0dncdfCswt38BJMegLI35",
  consumer_secret: 'MEOlgjprxzPgNrE83i1C6v59WTgWKM20TyXoA7yj7A7W3SiAYH',
  access_token_key: '918936255991369728-Kyb9359ckkwpLPZMs0DcnSSfKvcYjFy',
  access_token_secret: 'W7xlbE9BJCJRl4jYWitFtblAbVEFTPqNDcdmASnHFgQV7'
})

client.get('my-tweets', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets);  // The favorites. 
  console.log(response);  // Raw response object. 
});