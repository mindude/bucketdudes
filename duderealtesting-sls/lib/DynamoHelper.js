var AWS = require("aws-sdk");
var uuid = require("uuid");
AWS.config.update({region: "us-east-1"});
var docClient = new AWS.DynamoDB.DocumentClient();

module.exports.saveWeather = function(city,temp,callback){
    var params = {
        TableName: "sometable",
        Item: {
            somekey: uuid.v1(),
            City: city,
            Temp: temp
        }
    };

    docClient.put(params, function(error, data){
        if(error){
            return callback(error)
        }
        callback(null,"Woooo");
    });
};