'use strict';

var jwt = require("jsonwebtoken");

module.exports.handler = function(event, context, cb) {

  var policy = {
    "principalId": "arn:aws:iam::717454164754:user/jax.jaquez@gmail.com",
    "policyDocument": {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Deny",
          "Action": [
            "execute-api:Invoke",
            "lambda:Invoke"
          ],
          "Resource": [
            "arn:aws:lambda:us-east-1:292274580527:function:duderealtesting-sls-weather-secure",
              "arn:aws:execute-api:us-east-1:292274580527:ts4xmfum6f/*/PUT/weather-secure"
          ]
        }
      ]
    }
  };

  jwt.verify(event.authorizationToken, "abc123!@#", function(error,decoded){
    if(error){
      return cb(null,policy);
    }
    if(decoded && decoded.username === "hola"){
      policy.policyDocument.Statement[0].Effect = "Allow";
    }
    cb(null,policy);
  })
};
