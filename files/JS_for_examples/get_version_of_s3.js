var AWS = require('aws-sdk');

AWS.config.region = 'us-west-2';

var YOUR_BUCKET = "bucketdudes"
var s3 = new AWS.S3();
var params = { Bucket: YOUR_BUCKET, Key:'index.html' };

s3.getObject(params, function(err, data) 
{ if (err) console.log(err, err.stack);
else 
console.log('This is how you get the "Website version"');
console.log("Last-edit: ",data.LastModified); }); 


s3.listBuckets(function(err, data) {
  if (err) { console.log("Error:", err); }
  else {
console.log('This is how you get the "Bucket version"');
    for (var index in data.Buckets) {
      var bucket = data.Buckets[index];
if(bucket.Name == YOUR_BUCKET){
      console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
}
    }
  }
});
