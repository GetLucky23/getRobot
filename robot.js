'use strict'

/* SOFTWARE */

Robot.prototype = {
  // main core methods

  getMainInfo() {
    console.log(`Robot ${this.name}, cpu version ${this.cpuVersion}`);

    return `Robot ${this.name}, cpu version ${this.cpuVersion}`;
  },

  getAdditionalInfo() {
    console.log(`Updated version: ${this.softwareVersion}`);

    return `Updated version: ${this.softwareVersion}`;
  },

  getGreeting() {
    console.log(`Hello Master. I am ${this.name}. Waiting for your command.`);

    return `Hello Master. I am ${this.name}. Waiting for your command.`;
  },

  updateRobot(updateVersion) {
    this.softwareVersion = updateVersion;
    console.log(`${this.name} updated to ${updateVersion}`);

    return `${this.name} updated to ${updateVersion}`;
  },

  // commands menu

  addCommand: function(command_name, command) {
    Robot.prototype[command_name] = command;

    console.log(`Your command ${command_name} was added. Try it!`);
  },

  deleteCommand: function(command_name) {
    delete Robot.prototype[command_name];

    console.log(`Your command ${command_name} was removed.`);
  },

  editCommand: function(command_name, command) {
    if (command_name in Robot.prorotype) {
      Robot.prototype[command_name] = command;

      console.log(`Your command ${command_name} was edited. Try it!`);
    } else {
      console.log(`Command ${command_name} not found. Nothing to change.`);
    }
  },

  // navigation methods

  getCoords: function() {
    console.log(`x=${this.coords.x} y=${this.coords.y}`);

    return `x=${this.coords.x} y=${this.coords.y}`;
  },

  setTargetCoords: function(targX, targY) {
    this.target.coords.x = targX;
    this.target.coords.y = targY;
  },

  getTargetCoords: function() {
    console.log(`x=${this.target.coords.x} y=${this.target.coords.y}`);

    return `x=${this.target.coords.x} y=${this.target.coords.y}`;
  },

  // movement control methods

  moveForward: function(step = 1) {
    this.coords.y += step;
    console.log(`${this.name} stepped ${step} forward`);
  },

  moveBack: function(step = 1) {
    this.coords.y -= step;
    console.log(`${this.name} stepped ${step} back`);
  },

  moveLeft: function(step = 1) {
    this.coords.x -= step;
    console.log(`${this.name} stepped ${step} left`);
  },

  moveRight: function(step = 1) {
    this.coords.x += step;
    console.log(`${this.name} stepped ${step} right`);
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

// creating default robot
const lucky = new Robot('lucky');

lucky.getGreeting();

// type your command below


