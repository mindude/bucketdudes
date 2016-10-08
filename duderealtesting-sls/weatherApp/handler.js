var aws = require("aws-sdk");
var lambda = new aws.Lambda({region: "us-east-1"});

module.exports.handler = function(event, context, cb) {
    event.city.map(lambda.invoke()
    );
};
