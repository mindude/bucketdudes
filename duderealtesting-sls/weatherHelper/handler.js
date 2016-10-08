require("string_format");
var request = require("request");

module.exports.handler = function(event, context, cb) {
  request.get("http://api.openweathermap.org/data/2.5/weather?q={0}&appid=ea4dd97a55fefeb38dcd3364cbacfd74".format(ciudad), function (error, data) {
    if (error) {
      context.failed(error);
    }
    else {
      var response = JSON.parse(data.body);
      var result = "El clima de {0} es de {1} grados kelvin".format(ciudad, response.main.temp);
      context.succeed(result);
    }
  })
};
