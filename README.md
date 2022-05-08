# getRobot
Basic JS implementation of robot software - movement, targeting, responding - based on prototypes

You have a bot named 'Lucky' It's an object.
Lucky has .name, .cpuVersion, .softwareVersion and coordinates.

Behind Lucky stand multiple software systems:
- mainCore
- navigationCore
- movementCore

-------------------------------------------------------

VERSIONS:

v1.0 (branch: 'develop_v1.0')
- This code shows how robot uses additional software.
- All include their own methods, seperately created.

v2.0 (branch: 'develop_v2.0' and so on...)
- robot is created by function-constructor
- Methods are written in constructor's prototype
- THEREFORE: new robot creating is simplifed

v2.1
- added html interface with description
- added console output
- added commands adding/deleting/editing


-------------------------------------------------------

TO ADD:

+ upgraded system of 
- fire system (reload, ammo amount, )
  - a) choosing enemies
  - b) shooting
  - c) alerting('Target eliminated.')
- command adding and editing
  + a) command adding
  - b) command editing
- reporting + console.log

- html interface page
  + basic implementation
  + info page
  - usage with buttons
  - graphical robot interpretation
  - graphical command interpretations
- buttons - to request info and give commands
- built-in console
  + output console
  - input console (or other way of interaction, e.g. buttons)


