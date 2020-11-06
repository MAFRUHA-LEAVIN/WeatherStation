$(document).ready(function() {
  $("#interval_div").hide();
  let e = "home";
  const API_ADDRESS = "http://webapi19sa-1.course.tamk.cloud/v1/weather";

  const API_ADDRESS_Humidty_out =
    "http://webapi19sa-1.course.tamk.cloud/v1/weather/humidity_out";
    const API_ADDRESS_Air_Own ="http://webapi19sc-3.course.tamk.cloud/v1/weather/air_presure";
    

  $("#title_div").html(
    '<h1>Welcome to the weather station!</h1> <img id="img" src ="iot-2019.png"class =img-responsive >'
  );


  /***
    HOME section begins
  */

  $("#home").click(function() {
    location.reload();
  });

  /***
    HOME section ends
  */

  /***
    TEMPERATURE section begins



  */

  // WORK IN PROGRESS

  $("#temperature").click(function() {
    $("#title_div").html("<h1>Temperature</h1>");
    $("#explanation_div").html("Temperature data below");
    $("#interval_div").show();
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

    drawTemperatureData(API_ADDRESS);
  });

  /***
    TEMPERATURE section ends
  */

  /***
    WIND SPEED section begins
  */

  $("#wind_speed").click(function() {
    $("#title_div").html("<h1>Wind speed</h1>");
    $("#explanation_div").html("wind speed data below");
    $("#interval_div").show();
    $("#data_div").html(
      '<canvas id="myChart" width="400" height="400"></canvas>'
    );
    drawWindspeedChart(API_ADDRESS);
  });

  /***
    WIND SPEED section ends
  */

  /***
    HUMIDITY section begins
  */
  $("#humidity").click(function() {
    $("#title_div").html("<h1>Humidity</h1>");
    $("#interval_div").show();
    $("#explanation_div").html("Humidity data below");
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

    drawHumidityData(API_ADDRESS);
  });

  /***
    HUMIDITY section ends
  */
 /*Rain start*/

 $("#Rain").click(function() {
  $("#title_div").html("<h1>Rain</h1>");
  $("#interval_div").show();
  $("#explanation_div").html("Rain data below");
  var dt = new Date();
  var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

  drawRainData(API_ADDRESS);
});
/*Rain ends*/


  /***
    LAST VALUES section begins
  */

  $("#last_values").click(function() {
    $("#title_div").html("<h1>Last values</h1>");
    $("#interval_div").show();
    $("#explanation_div").html("Last 500 values");
    lastValues(API_ADDRESS);
  });

  /***
    LAST VALUES section ends
  */

  /***
    EXAMPLE section begins
  */

  $("#example").click(function() {
    $("#title_div").html("<h1>Example</h1>");
    $("#interval_div").show();
    $("#explanation_div").html(
      "This is an example on how to use a function to fetch data."
    );
    exampleFunction(API_ADDRESS);
  });

  /***
    EXAMPLE section ends
  */

  /***
    LAST20measurementsTemperature section begins
  */

  $("#Temperature_out").click(function() {
    $("#title_div").html("<h1>Last 20 Tempeature.</h1>");
    $("#interval_div").show();
    $("#explanation_div").html("Last 20 values");
    Temperatureout(API_ADDRESS);
  });

  /***
  LAST20measurementsTemperature section ends
  */

  /***
    
Humidity_out section begins
  */

  $("#Humidity_out").click(function() {
    $("#title_div").html("<h1>Last 20 Humidity values</h1>");
    $("#interval_div").show();
    $("#explanation_div").html("Last 20 values");
    Humidityout(API_ADDRESS_Humidty_out);
  });

  /***
  Humidity_out section ends
  */
  /***
 wind_speed_out section begins
 */

  $("#wind_speed_out").click(function() {
    $("#title_div").html("<h1>Wind speed out</h1>");
    $("#interval_div").show();
    $("#explanation_div").html("...");
    $("#data_div").html(
      '<canvas id="myChart" width="400" height="400"></canvas>'
    );
    drawwindspeedData(API_ADDRESS);
  });
  /***
 wind_speed_out section ends
  */

  /***
    Own API section begins



  */

  



  /***
   Own API section ends
  */

 


 
});
