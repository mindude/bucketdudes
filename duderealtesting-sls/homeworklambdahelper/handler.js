module.exports.handler=function(event,context,cb){

  function merge(left, right){
    var result  = [],
        il      = 0,
        ir      = 0;

    while (il < left.length && ir < right.length){
      if (left[il] < right[ir]){
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
  }
try {
    var result = merge(event.left, event.right);

    context.succeed(result);
}
catch(err){
    context.fail(err);
}
};