var s3Helper = require('./S3Helper');
var async = require('async');

function saveInS3(){
  var indexes = [];

  for(var index = 0; index < 5000;index++){
    indexes.push(index);
  }

  var saveFunctions = indexes.map(function(index){
    return async.apply(saveAll, index);
  });

  async.parallel(saveFunctions, function(error, data){
    if(error){
      console.log(error);
    }
    else{
      //console.log(data);
    }
  })

  function saveAll(index, callback){
    var content = '{"name":"nombre"}';
    s3Helper.saveInS3("jax-node-examples","obligatoryharambemention-"+index+".json", content, function (error, data) {
      if(error){
        callback(error);
      }
      else{
        callback(data);
        console.log(data);
      }
    })
  }

}



function getObjectInBucket(){
  s3Helper.readFromS3inStream("bucketdudes", 'images/yeoman.519a31bc.png', 'dont-expect-a-lot-from-us.png')
  s3Helper.readFromS3("bucketdudes", 'images/yeoman.519a31bc.png', function(error, data){
        if (error){
          //console.log(error);
        }
        else{
          if (data.Metadata.move == 'true'){
            var fs = require('fs');
            var content = fs.createReadStream('dont-expect-a-lot-from-us.png');
            s3Helper.saveInS3("cc116-assignment3","021749/dont-expect-a-lot-from-us.png", content, function (error, data) {
              if(error){
                callback(error);
              }
              else{
                console.log("You finished homework part 1");
              }
            })
          }
          else{
            console.log("Metadata is false");
          }
        }
  });


}

getObjectInBucket();
