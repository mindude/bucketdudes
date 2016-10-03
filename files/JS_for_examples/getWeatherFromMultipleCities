var aws = require('aws-sdk');
var lambda = new aws.Lambda({region:'us-east-1'});
var async = require('async');

module.exports.handler = function(event, context, cb) {


  var listadeFunciones = event.city.map(function(cities) {
    return async.apply(conseguirCiudad, cities);
  });


  async.parallel(listadeFunciones
  ,function (err, ans) {
    if(err){
      cb(err);
    }else {
      cb(null,ans);
    }
  });

};

function conseguirCiudad(ciudad, callback){
  var params =
    {
      FunctionName: 'duderealtesting-sls-conseguirClimaDeUnaCiudad',
      InvocationType: 'RequestResponse',
      Payload: JSON.stringify({"city": ciudad})
    };


  lambda.invoke(params, function(error,data){
    if(error){
      callback(error);
    }
    else{

      callback(null,data.Payload);
    }
  })
}
