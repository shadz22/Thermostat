'use strict'

function Thermostat () {
	this.DEFAULT_TEMPERATURE = 20;
	this.temperature = this.DEFAULT_TEMPERATURE;
	this.MINIMUM_TEMPERATURE = 10;
	this.powerSavingMode = true;
	this.MAXIMUM_TEMP_SAVING_ON = 25;
	this.MAXIMUM_TEMP_SAVING_OFF = 32;
	this.DEFAULT_TEMPERATURE = 20;
	this.MEDIUM_USAGE = 18;
}

Thermostat.prototype.getCurrentTemperature = function() {
	return this.temperature;
};

Thermostat.prototype.up = function() {
	if (this.isMaximumTemperature()) {
		return;
	}
	this.temperature += 1;
};

Thermostat.prototype.down =  function() {
	if (this.isMinimumTemperature()) {
		return;
	}
	this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function () {
	return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingMode = function() {
	// if (this.turnOffPowerSavingMode()) {
	// 	return this.powerSavingMode === false;
	// }
	return this.powerSavingMode === true;
};

Thermostat.prototype.turnOffPowerSavingMode = function() {
	this.powerSavingMode = false;
};

Thermostat.prototype.turnOnPowerSavingMode = function() {
	this.powerSavingMode = true;
};

Thermostat.prototype.isMaximumTemperature = function() {
	if (this.isPowerSavingMode() === false) {
		return this.temperature === this.MAXIMUM_TEMP_SAVING_OFF;
	}
	return this.temperature === this.MAXIMUM_TEMP_SAVING_ON;
};

Thermostat.prototype.resetTemperature = function() {
	this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.energyUsage = function() {
	if (this.temperature < this.MEDIUM_USAGE) {
		return 'low-usage';
	}
	if (this.temperature >= this.MEDIUM_USAGE && this.temperature <= this.MAXIMUM_TEMP_SAVING_ON) {
		return 'medium-usage';
	}
	return 'high-usage';
}