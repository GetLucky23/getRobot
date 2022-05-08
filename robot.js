'use strict'

/* SOFTWARE */

Robot.prototype = {
  // main core methods

  getMainInfo() {
    return `Robot ${this.name}, cpu version ${this.cpuVersion}`;
  },

  getAdditionalInfo() {
    return `Update version: ${this.softwareVersion}`;
  },

  updateRobot(updateVersion) {
    this.softwareVersion = updateVersion;

    return `${this.name} updated to ${updateVersion}`;
  },

  // navigation methods

  getCoords: function() {
    return `x=${this.coords.x} y=${this.coords.y}`;
  },

  setTargetCoords: function(targX, targY) {
    this.target.coords.x = targX;
    this.target.coords.y = targY;
  },

  // movement control methods

  moveForward: function(step = 1) {
    this.coords.y += step;
  },

  moveBack: function(step = 1) {
    this.coords.y -= step;
  },

  moveLeft: function(step = 1) {
    this.coords.x -= step;
  },

  moveRight: function(step = 1) {
    this.coords.x += step;
  },
}


/* HARDWARE */

// robot constructor

function Robot(name) {
  this.name = name;
  this.cpuVersion = 2.0;
  this.softwareVersion = 2.0;

  this.coords = {
    x: 0,
    y: 0,
  };

  this.target = {
    coords: {
      x: 0,
      y: 0,
    },
  };
};

// creating robot
const lucky = new Robot('lucky');
console.log(lucky);
