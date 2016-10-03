var urlnasa = "http://food2fork.com/api/get";
var request = require('request');

var fs = require('fs');

var params = {
  url: urlnasa,
  key: "eabca0bf48175c869c837effc69b5c77",
  rId: "35171"
};

request(params, function(err, options, callback){
  if (err){
    console.log(err);
  }
  else{
    console.log(callback);
  }
});
