setInterval(function() {

    $.get('/robot/distance', function( json_data ) {
        if (json_data.distance){
            $("#distance").html("Distance: " + json_data.distance);    
        }
        if (json_data.connected == 1){
            $("#wifiStatus").html("Online");
            $("#wifiStatus").css("color","green");    
        }
        else {
            $("#wifiStatus").html("Offline");
            $("#wifiStatus").css("color","red");     
        }
    })
    .fail(function() {
       $("#wifiStatus").html("Offline");
       $("#wifiStatus").css("color","red");      
    });

}, 1000);

// Function to control LEDs
$(document).ready(function() {

  $("#1").click(function() {
    $.get('/robot/forward');
  });

  $("#2").click(function() {
    $.get('/robot/left');
  });

  $("#3").click(function() {
    $.get('/robot/right');
  });

  $("#4").click(function() {
    $.get('/robot/backward');
  });

  $("#5").click(function() {
    $.get('/robot/stop');
  });
});