const express = require('express')
//instant server restart
const request = require('request')
var app = express();

app.set('view engine', 'ejs')

var city = 'Charlotte';
var URl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=271d1234d3f497eed5b1d80a07b3fcd1`;

app.get('/', function(req, res) {
    request(URl, function(error, response, body) {
         weather_json = JSON.parse(body);

         console.log(weather_json);
        
      // creating the data keys
         var weather = {
             city: city ,
            temperature: Math.round(weather_json.main.temp),
            description: weather_json.weather[0].description,
            icon: weather_json.weather[0].icon
         };

         var weather_data = {
             weather : weather
         };
            res.render('index', weather_data );
    });
    

});


app.listen(8000);

