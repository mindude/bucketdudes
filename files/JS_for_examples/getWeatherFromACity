require("string_format");
var request = require("request");

module.exports.handler = function(event, context, cb) {
  request.get("http://api.openweathermap.org/data/2.5/weather?q={0}&appid=ea4dd97a55fefeb38dcd3364cbacfd74".format(event.city), function (error, data) {
    if (error) {
      context.fail(error);
    }
    else {
      var response = JSON.parse(data.body);
      var result = "The weather of {0} is {1} celsius".format(event.city, response.main.temp -272.150);
      context.succeed(result);
    }
  })
};

