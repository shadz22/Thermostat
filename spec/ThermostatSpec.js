'use strict';

describe('Thermostat', function() {
	var thermostat;
	
	beforeEach(function() {
		thermostat = new Thermostat();
	});

	it('starts at 20 degrees', function() {
		expect(thermostat.temperature).toEqual(20);
	});

	it('increases the temperature by 1 degree', function(){
		thermostat.up();
		expect(thermostat.getCurrentTemperature()).toEqual(21)
	});

	it('decreases the temperature by 1 degree', function() {
		thermostat.down();
		expect(thermostat.getCurrentTemperature()).toEqual(19);
	});

	it('has a default minimum temperature of 10 degrees', function() {
		for (var i = 0; i < 11; i++ ) {
			thermostat.down();
		}
		expect(thermostat.getCurrentTemperature()).toEqual(10);
	});

	it('has power saving mode on by default', function() {
		expect(thermostat.isPowerSavingMode()).toBe(true);
	});

	it('can turn off power saving mode', function() {
		thermostat.turnOffPowerSavingMode();
		expect(thermostat.isPowerSavingMode()).toBe(false);
	});

	it('can turn on power saving mode', function() {
		thermostat.turnOffPowerSavingMode();
		expect(thermostat.isPowerSavingMode()).toBe(false);
		thermostat.turnOnPowerSavingMode();
		expect(thermostat.isPowerSavingMode()).toBe(true);
	})

	// it('has default maximum temperature when saving mode is on', function() {

	// 	expect(thermostat.getCurrentTemperature()).toEqual(25)
	// })

});