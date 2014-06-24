// Objects and constants relating to mobs

// Constructor for Mob
var Mob = function(name, str, hp, gold, xp, image) {
  this.name = name;
  this.str = str;
  this.hp = hp;
  this.gold = gold;
  this.xp = xp;
  this.image = image;
}

// Mob Constants
////////////////////////////////////////

// Slimes

var GREEN_SLIME_1 = new Mob('Green Slime', 1, 3, 3, 15, '');
var RED_SLIME_1 = new Mob('Red Slime', 1, 4, 4, 17, '');
var BLUE_SLIME_1 = new Mob('Blue Slime', 1, 5, 5, 19, '');
var BAT = new Mob('Bat', 2, 4, 4, 17, '');
var RAT = new Mob('Rat', 3, 5, 7, 35, '');
var SLIME_KING = new Mob('Slime King', 3, 10, 30, 55, 'slimeking');

var GREEN_SLIME_2 = new Mob('Green Slime', 3, 3, 3, 15, '');
var RED_SLIME_2 = new Mob('Red Slime', 3, 4, 4, 17, '');
var BLUE_SLIME_2 = new Mob('Blue Slime', 3, 5, 5, 19, '');
var SLIME_KING_DECOY = new Mob('Slime King Decoy', 5, 7, 20, 25, '');
var PURPLE_SLIME = new Mob('Purple Slime', 5, 15, 15, 19, '');
var TRUE_SLIME_KING = new Mob('True Slime King', 10, 50, 44, 75, 'trueslimeking');

var SLIME_ZOMBIE = new Mob('Slime Zombie', 2, 50, 20, 25, '');
var SLIME_GHOUL = new Mob('Slime Ghoul',  3, 40, 25, 27, '');
var ZOMBIE_TRUE_SLIME_KING = new Mob('Zombie True Slime King', 10, 150, 444, 275, 'zombietrueslimeking');

var SLIME_BABY = new Mob('Slime Baby', 6,  5,  15, 19, '');
var SLIME_TODDLER = new Mob('Slime Toddler', 2,  5, 120, 25, '');
var SLIME_PARENT = new Mob('Slime Parent', 7, 15, 115, 19, '');
var SLIME_TEACHER = new Mob('Slime Teacher', 3, 40, 125, 27, '');
var SLIME_BULLY = new Mob('Slime Bully', 13, 130, 344, 255, '');

var HOLY_SLIME = new Mob('Holy Slime', 6, 25, 150, 190, '');
var SLIME_ANGEL = new Mob('Slime Angel', 7, 23, 155, 211, '');
var SLIME_ARCHANGEL = new Mob('Slime Archangel', 8, 28, 170, 290, '');
var SLIME_OF_SLIMES = new Mob('Slime of Slimes', 6, 20, 145, 140, '');
var SLIME_GOD = new Mob('Slime God', 17, 166, 544, 475, '');

// Deathmarch

var RUNNER = new Mob('Runner', 20, 50, 200, 200, '');
var MAD_RUNNER_1 = new Mob('Mad Runner', 30, 200, 400, 400, '');
var MAD_RUNNER_2 = new Mob('Mad Runner', 30, 300, 400, 400, '');
var MAD_RUNNER_3 = new Mob('Mad Runner', 30, 400, 400, 400, '');
var MAD_RUNNER_4 = new Mob('Mad Runner', 30, 500, 400, 400, '');
var MAD_RUNNER_5 = new Mob('Mad Runner', 30, 600, 400, 400, '');
var RUNNING_BASTARD = new Mob('Running Bastard', 50, 1000, 4000, 4000, '');