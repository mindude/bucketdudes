var aws = require('aws-sdk');
var lambda = new aws.Lambda({region:'us-east-1'});
var async = require('async');

module.exports.handler = function(event, context, cb) {
  var items = event.array;

  if (items.length < 2) {
     context.succeed(items);
  }

  var middle = Math.floor(items.length / 2),
      pleft    = items.slice(0, middle),
      pright   = items.slice(middle);

  var params = [
    {
      FunctionName: 'duderealtesting-sls-homeworklambdamergesorthelper',
      InvocationType: 'RequestResponse',
      LogType: 'Tail',
      Payload: '{ "array" : [' + pleft + '] }'
    },
    {
      FunctionName: 'duderealtesting-sls-homeworklambdamergesorthelper',
      InvocationType: 'RequestResponse',
      LogType: 'Tail',
      Payload: '{ "array" : [' + pright + '] }'
    }
  ];

    console.log(params);

  async.parallel(
      {
        left: function(callback){lambda.invoke(params[0], function(err, data1)
        {
          if (err) {
            console.log('This is the error, read me plz');
            console.log(err);
            context.fail(err);
          } else {
            console.log(data1);
            callback(null, JSON.parse(data1.Payload));
          }
        })},

        right: function(callback){lambda.invoke(params[1], function(err, data2) {
          if (err) {
            console.log('This is the other error');
            console.log(err);
            context.fail(err);
          } else {
            callback(null, JSON.parse(data2.Payload));
          }
        })}
      },

      function(error, datah){
        if(error)
        {
          console.log('this is the third error');
          console.log(error);
          context.fail(error);
        }
        else
        {
          console.log('this is the log error');
          console.log(datah);
          var helperparams =
          {
            FunctionName: 'duderealtesting-sls-homeworklambdahelper',
            InvocationType: 'RequestResponse',
            LogType: 'Tail',
            Payload: '{ "left" : [' + datah.left + '], "right" : [' + datah.right + '] }'
          };

          console.log(helperparams);

          lambda.invoke(helperparams, function(eror, datar) {
            if (eror) {
              console.log('wake me up');
              console.log(eror);
              context.fail(eror);
            } else {
              context.succeed(JSON.parse(datar.Payload));
            }
          });
        }
      });
};