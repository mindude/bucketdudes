var aws = require("aws-sdk");
var lambda = new aws.Lambda({region: "us-east-1"});
var async = require("async");
var request = require("request");
var dynamo = require("./DynamoHelper");
require("string_format");

module.exports.getWeather = function(ciudad, callback){
    request.get("http://api.openweathermap.org/data/2.5/weather?q={0}&appid=ea4dd97a55fefeb38dcd3364cbacfd74".format(ciudad), function (error, data) {
        if (error) {
            callback(error)
        }
        else {
            var response = JSON.parse(data.body);
            var result = "El clima de {0} es de {1} grados kelvin".format(ciudad, response.main.temp);
            dynamo.saveWeather(city, response.main.temp, function(error,data){
                if(error){
                    return callback(error);
                }
                callback(null,result);
            })
        }
    });
};

module.exports.getWeather = getWeather;

module.exports.getMultWeather = function(ciudades, callback){
    var Invokes = ciudades.map(function (ciudad) {
        return async.apply(lambdaInvoke, ciudad);
    });    async.parallel(Invokes, function(error, data){
        if(error){
            console.log(error);
        }
        else{
            callback(null, data);
        }
    });
};

function lambdaInvoke(ciudad, callback){
    lambda.invoke({
        FunctionName: 'gmbz-sls-weatherSimple',
        InvocationType: 'RequestResponse',
        Payload: '{"city": "' + ciudad + '"}'
    }, function(err, data){
        if(err){
            console.log(error);
        }
        else{
            callback(null, JSON.parse(data.Payload));
        }
    })
}