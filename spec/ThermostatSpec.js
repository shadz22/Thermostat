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
	});

	describe('when power saving mode is on', function() {
		it('has default maximum temperature of 25 ', function() {
			for (var i = 0; i < 6; i++) {
				thermostat.up();
			}
			expect(thermostat.getCurrentTemperature()).toEqual(25);
		})
	});

	describe('when power saving mode is off', function() {
		it('has the maximum temperature of 32', function() {
			thermostat.turnOffPowerSavingMode();
			for (var i = 0; i < 13; i++) {
				thermostat.up();
			}
			expect(thermostat.getCurrentTemperature()).toEqual(32);
		});
	});

	it('can be reset to the default temperature of 20', function() {
		for (var i = 0; i < 6; i++) {
			thermostat.up();
		}
		thermostat.resetTemperature();
		expect(thermostat.getCurrentTemperature()).toEqual(20);
	});

	describe('display usage level', function() {
		describe('when temperature is below 18 degrees', function() {
			it('shows the usage as low-usage', function() {
				for (var i = 0; i < 3; i++) {
					thermostat.down();
				}
				expect(thermostat.energyUsage()).toEqual('low-usage');
			});
		});

		describe('when temperature is between 18 and 25', function() {
			it('shows the usage as medium-usage', function() {
				expect(thermostat.energyUsage()).toEqual('medium-usage');
			});
		});

		describe('when temperature is above 25', function() {
			it('shows the usage as high-usage', function() {
				thermostat.powerSavingMode = false;
				for (var i = 0; i < 6; i++) {
					thermostat.up();
				}
				expect(thermostat.energyUsage()).toEqual('high-usage');
			});
		});
	});

});