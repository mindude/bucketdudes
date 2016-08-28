var AWS = require('aws-sdk');

AWS.config.region = 'us-west-2';

var YOUR_BUCKET = "bucketdudes"
var s3 = new AWS.S3();
s3.listBuckets(function(err, data) {
  if (err) { console.log("Error:", err); }
  else {
    for (var index in data.Buckets) {
      var bucket = data.Buckets[index];
if(bucket.Name == YOUR_BUCKET){
      console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
}
    }
  }
});
