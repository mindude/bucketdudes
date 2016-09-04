var urlnasa = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
var request = require('request');

var fs = require('fs');
var writeStream = fs.createWriteStream('dailynasa.jpg');

var params = {
  url: urlnasa,
  json: 'true'
};

request(params, function(err, options, callback){
  if (err){
    console.log(err);
  }
  else{
    request(callback.url).pipe(writeStream);
    console.log(callback.title);
  }
});
