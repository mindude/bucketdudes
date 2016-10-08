'use strict';

var s3helper = require('../lib/S3Helper');

module.exports.handler = function(event, context, cb) {
  s3helper.getObjectListFromBucket(event.bucket,function(error,data){
    if(error){
      console.log(error);
    }
    console.log(data);
    cb(null,data);
  });


};

