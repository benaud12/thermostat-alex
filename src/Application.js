$( document ).ready (function() {

  $('#temp').text(thermostat.temperature);

  $('#upTemp').click(function() {
    thermostat.upTemp();
    $('#temp').text(thermostat.temperature);
    //$('#background').css('background-image', 'url("./images/SmokeFog-Slide6.jpg")');
    //["I'm only", age, "years old"].join(" ")
  });

  $('#downTemp').click(function() {
    thermostat.downTemp();
    $('#temp').text(thermostat.temperature);
    //$('#temp').css("color", thermostat.colour);
  });

  $('#changePowerSaving').click(function() {
    thermostat.changePowerSaving();
    $('#temp').text(thermostat.temperature);
  });

  $('#reset').click(function() {
    thermostat.reset();
    $('#temp').text(thermostat.temperature);
    //$('#temp').css("color", thermostat.colour);
  });

});
