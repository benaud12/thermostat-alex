describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should start with power saving on", function() {
    expect(thermostat.powerSaving).toBe(true);
  });

  it("can turn power saving off", function() {
    thermostat.changePowerSaving();
    expect(thermostat.powerSaving).toBe(false);
  });

  // it("can turn power saving on", function() {
  //   thermostat.powerSaving = true;
  //   thermostat.changePowerSaving();
  //   expect(thermostat.powerSaving).toBe(true);
  // });

  describe('maximum temperature', function() {
    it('is 25 degrees with power saving on', function() {
      expect(thermostat.maxTemp()).toEqual(25);
    });

    it('is 32 degrees with power saving off', function() {
      thermostat.powerSaving = false;
      expect(thermostat.maxTemp()).toEqual(32);
    });
  });

  describe('increasing the temperature', function() {
    describe('power saving on', function() {

      it("temperature increases by 1 if temperature < 25", function() {
        thermostat.upTemp();
        expect(thermostat.temperature).toEqual(21);
      });

      it("can not increase above 25", function() {
        thermostat.temperature = 25
        thermostat.upTemp();
        expect(thermostat.temperature).toEqual(25);
      });
    });
  });

  describe('increasing the temperature', function() {
    describe('power saving off', function() {
      beforeEach(function() {
        thermostat.powerSaving = false;
      });

      it("temperature increases by 1 if temperature < 32", function() {
        thermostat.upTemp();
        expect(thermostat.temperature).toEqual(21);
      });

      it("can not increase above 32", function() {
        thermostat.temperature = 32;
        thermostat.upTemp();
        expect(thermostat.temperature).toEqual(32);
      });
    });
  });

  describe('decreasing the temperature', function() {
    it("temperature decreases by 1 if temperature > 10", function() {
      thermostat.downTemp();
      expect(thermostat.temperature).toEqual(19);
    });

    it("can not decrease below 10", function() {
      thermostat.temperature = 10
      thermostat.downTemp();
      expect(thermostat.temperature).toEqual(10);
    });
  });


  describe('reset temperature', function() {
    it("will reset temperature to 20 when resetting", function() {
      thermostat.temperature = 25
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('energy efficiency', function() {
    it('shows colour green when temperature <= 18', function() {
      thermostat.temperature = 18
      expect(thermostat.energyUsage()).toEqual('green');
    });
    it('shows colour yellow when temperature  > 18 and < 25', function() {
      thermostat.temperature = 20
      expect(thermostat.energyUsage()).toEqual('yellow');
    });
    it('shows colour red when temperature >= 25', function() {
      thermostat.temperature = 25
      expect(thermostat.energyUsage()).toEqual('red');
    });
  });

});


    // it("when power saving is turned on, if temperature > 25, it will reset to 25", function() {
    //   thermostat.powerSaving = false;
    //   thermostat.temperature = 30
    //   thermostat.powerSaving = true;
    //   thermostat.reset();
    //   expect(thermostat.temperature).toEqual(25);
    // });
    //
    // it("when power saving is turned off, temperature will not change", function() {
    //
    //   thermostat.temperature = 30
    //   thermostat.powerSaving = false;
    //   thermostat.reset();
    //   expect(thermostat.temperature).toEqual(30);
    // });
