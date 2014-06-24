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

// Hell

var SMALL_DEMON = new Mob('Small Demon', 5, 20, 25, 45, '');
var MEDIUM_DEMON = new Mob('Medium Demon', 10, 40, 50, 65, '');
var LARGE_DEMON = new Mob('Large Demon', 15, 80, 75, 85, '');
var HORNED_DEVIL = new Mob('Horned Devil', 15, 100, 40, 150, '');

var WOMAN = new Mob('Woman', 1, 20, 20, 25, '');
var TODDLER = new Mob('Toddler', 1, 14, 21, 23, '');
var PREGNANT_WOMAN = new Mob('Pregnant Woman', 1, 21, 24, 27, '');
var CHILD = new Mob('Child', 1, 26, 10, 29, '');
var GRANDMA = new Mob('Your Grandma', 20, 100, 66, 666, '');

var GRAMPS = new Mob('Gramps', 1, 20, 20, 25, '');
var GRAN = new Mob('Gran', 1, 14, 21, 23, '');
var CAT_LADY = new Mob('Crazy Cat Lady', 1, 21, 24, 27, '');
var COOT = new Mob('Coot', 1, 26, 10, 29, '');
var GRANDFATHER = new Mob('Your Grandfather', 20, 150, 66, 666, '');

var GREAT_GRANDPA = new Mob('Great Grandpa', 1,  20, 120, 25, '');
var GREAT_GREAT_GRANDMA = new Mob('Great Great Grandma', 1, 114,  21, 23, '');
var GREAT_COUSIN = new Mob('Great Cousin', 1,  21, 124, 27, '');
var MISC_ANCESTOR = new Mob('Misc. Ancestor', 1,  26, 110, 29, '');
var ADAM_AND_EVE = new Mob('Adam and Eve', 30, 200, 66, 666, '');

var TRUE_DEMON = new Mob('True Demon', 12, 66, 266, 666, '');
var TRUE_SATAN = new Mob('True Satan', 36, 666, 666, 666, '');

// Larceny

var BROWN_POT = new Mob('Brown Pot', 6, 40, 50, 50, '');
var HOMEOWNER = new Mob('Homeowner', 1, 1, 1, 1, '');

var GUARD = new Mob('Guard', 8, 45, 50, 50, '');
var FAT_GUARD = new Mob('Fat Guard', 8, 65, 55, 40, '');
var BIG_GUARD = new Mob('Big Guard', 10, 45, 40, 55, '');
var MIMIC = new Mob('Mimic', 10, 100, 100, 100, '');

var GOLDEN_POT = new Mob('Golden Pot', 8, 75, 50, 50, '');
var ELDER = new Mob('Elder', 1, 10, 1000, 1000, '');

// Deathmarch

var RUNNER = new Mob('Runner', 20, 50, 200, 200, '');
var MAD_RUNNER_1 = new Mob('Mad Runner', 30, 200, 400, 400, '');
var MAD_RUNNER_2 = new Mob('Mad Runner', 30, 300, 400, 400, '');
var MAD_RUNNER_3 = new Mob('Mad Runner', 30, 400, 400, 400, '');
var MAD_RUNNER_4 = new Mob('Mad Runner', 30, 500, 400, 400, '');
var MAD_RUNNER_5 = new Mob('Mad Runner', 30, 600, 400, 400, '');
var RUNNING_BASTARD = new Mob('Running Bastard', 50, 1000, 4000, 4000, '');

// Overleveled

var DICKMONSTER = new Mob('Metallic Dickmonster', 150, 400, 2050, 450, '');
var PRIEST = new Mob('Priest Covered in Skulls', 100, 400, 5000, 650, '');
var ARMY = new Mob('Army of Lesser Monsters', 105, 800, 7005, 850, '');
var DRAGON = new Mob('Dragon of Burning Ice-Lightning', 103, 400, 5000, 750, '');
var DEMON_JESUS = new Mob('Demon Jesus', 200, 666, 7045, 850, '');
var SPOILER = new Mob('Potential Spoiler for Future Quests', 60, 6666, 7045, 1850, '');
var LORD_FORNICUS = new Mob('Lord Fornicus and Kevin from <em>Cabin In The Woods</em>', 85, 250, 500, 500, '');
var LEGENDARY = new Mob('Legendary Atma-Ruby-Emerald-Ultima-Crystal Weapon', 1000, 50, 5000, 650, '');
var UNGODLY_GOD = new Mob('Ungodly God of Unholy Hellfire with Spikes Protruding from the Groin', 15, 100, 40, 150, '');