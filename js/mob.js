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

Mob.Slimes = {
  GREEN_1 : new Mob('Green Slime', 1, 3, 3, 15, ''),
  RED_1 : new Mob('Red Slime', 1, 4, 4, 17, ''),
  BLUE_1 : new Mob('Blue Slime', 1, 5, 5, 19, ''),
  BAT : new Mob('Bat', 2, 4, 4, 17, ''),
  RAT : new Mob('Rat', 3, 5, 7, 35, ''),
  KING : new Mob('Slime King', 3, 10, 30, 55, 'slimeking'),

  GREEN_2 : new Mob('Green Slime', 3, 3, 3, 15, ''),
  RED_2 : new Mob('Red Slime', 3, 4, 4, 17, ''),
  BLUE_2 : new Mob('Blue Slime', 3, 5, 5, 19, ''),
  KING_DECOY : new Mob('Slime King Decoy', 5, 7, 20, 25, ''),
  PURPLE : new Mob('Purple Slime', 5, 15, 15, 19, ''),
  TRUE_KING : new Mob('True Slime King', 10, 50, 44, 75, 'trueslimeking'),

  ZOMBIE : new Mob('Slime Zombie', 2, 50, 20, 25, ''),
  GHOUL : new Mob('Slime Ghoul',  3, 40, 25, 27, ''),
  ZOMBIE_TRUE_KING : new Mob('Zombie True Slime King', 10, 150, 444, 275, 'zombietrueslimeking'),

  BABY : new Mob('Slime Baby', 6,  5,  15, 19, ''),
  TODDLER : new Mob('Slime Toddler', 2,  5, 120, 25, ''),
  PARENT : new Mob('Slime Parent', 7, 15, 115, 19, ''),
  TEACHER : new Mob('Slime Teacher', 3, 40, 125, 27, ''),
  BULLY : new Mob('Slime Bully', 13, 130, 344, 255, ''),

  HOLY : new Mob('Holy Slime', 6, 25, 150, 190, ''),
  ANGEL : new Mob('Slime Angel', 7, 23, 155, 211, ''),
  ARCHANGEL : new Mob('Slime Archangel', 8, 28, 170, 290, ''),
  SLIME_OF_SLIMES : new Mob('Slime of Slimes', 6, 20, 145, 140, ''),
  GOD : new Mob('Slime God', 17, 166, 544, 475, '')
}

Mob.Hell = {
  SMALL_DEMON : new Mob('Small Demon', 5, 20, 25, 45, ''),
  MEDIUM_DEMON : new Mob('Medium Demon', 10, 40, 50, 65, ''),
  LARGE_DEMON : new Mob('Large Demon', 15, 80, 75, 85, ''),
  HORNED_DEVIL : new Mob('Horned Devil', 15, 100, 40, 150, ''),

  WOMAN : new Mob('Woman', 1, 20, 20, 25, ''),
  TODDLER : new Mob('Toddler', 1, 14, 21, 23, ''),
  PREGNANT_WOMAN : new Mob('Pregnant Woman', 1, 21, 24, 27, ''),
  CHILD : new Mob('Child', 1, 26, 10, 29, ''),
  GRANDMA : new Mob('Your Grandma', 20, 100, 66, 666, ''),

  GRAMPS : new Mob('Gramps', 1, 20, 20, 25, ''),
  GRAN : new Mob('Gran', 1, 14, 21, 23, ''),
  CAT_LADY : new Mob('Crazy Cat Lady', 1, 21, 24, 27, ''),
  COOT : new Mob('Coot', 1, 26, 10, 29, ''),
  GRANDFATHER : new Mob('Your Grandfather', 20, 150, 66, 666, ''),

  GREAT_GRANDPA : new Mob('Great Grandpa', 1,  20, 120, 25, ''),
  GREAT_GREAT_GRANDMA : new Mob('Great Great Grandma', 1, 114,  21, 23, ''),
  GREAT_COUSIN : new Mob('Great Cousin', 1,  21, 124, 27, ''),
  MISC_ANCESTOR : new Mob('Misc. Ancestor', 1,  26, 110, 29, ''),
  ADAM_AND_EVE : new Mob('Adam and Eve', 30, 200, 66, 666, ''),

  TRUE_DEMON : new Mob('True Demon', 12, 66, 266, 666, ''),
  TRUE_SATAN : new Mob('True Satan', 36, 666, 666, 666, '')
}

Mob.Larceny = {
  BROWN_POT : new Mob('Brown Pot', 6, 40, 50, 50, ''),
  HOMEOWNER : new Mob('Homeowner', 1, 1, 1, 1, ''),

  GUARD : new Mob('Guard', 8, 45, 50, 50, ''),
  FAT_GUARD : new Mob('Fat Guard', 8, 65, 55, 40, ''),
  BIG_GUARD : new Mob('Big Guard', 10, 45, 40, 55, ''),
  MIMIC : new Mob('Mimic', 10, 100, 100, 100, ''),

  GOLDEN_POT : new Mob('Golden Pot', 8, 75, 50, 50, ''),
  ELDER : new Mob('Elder', 1, 10, 1000, 1000, '')
}

Mob.Fetch = {
  HORROR : new Mob('Horror From Beyond', 10, 70, 50, 50, ''),
  UNHOLY_DEMON : new Mob('Unholy Demon', 12, 90, 50, 50, ''),
  TERRIBLE_BEAST : new Mob('Terrible Beast', 10, 66, 50, 50, ''),
  ROCK_GUARDIAN : new Mob('Rock Guardian', 16, 100, 100, 100, ''),

  DESK : new Mob('Writing Desk', 1, 1, 1, 1, ''),
  FOLDER : new Mob('Folder', 1, 1, 1, 1, ''),
  TREE : new Mob('Tree', 1, 1, 1, 1, ''),
  PAPER_GUARDIAN : new Mob('Paper Guardian', 22, 130, 100, 100, ''),

  GRADE_SCHOOLER : new Mob('Grade Schooler', 10, 100, 1, 1, ''),
  BOY_W_GLUE : new Mob('Boy with Glue', 7, 160, 1, 1, ''),
  DRAGON_STICKER : new Mob('Girl with Dragon Sticker', 13, 70, 1, 1, ''),
  CLASS_ARTIST : new Mob('Class Artist', 25, 150, 100, 100, '')
}

Mob.Deathmarch = {
  RUNNER : new Mob('Runner', 20, 50, 200, 200, ''),
  MAD_RUNNER_1 : new Mob('Mad Runner', 30, 200, 400, 400, ''),
  MAD_RUNNER_2 : new Mob('Mad Runner', 30, 300, 400, 400, ''),
  MAD_RUNNER_3 : new Mob('Mad Runner', 30, 400, 400, 400, ''),
  MAD_RUNNER_4 : new Mob('Mad Runner', 30, 500, 400, 400, ''),
  MAD_RUNNER_5 : new Mob('Mad Runner', 30, 600, 400, 400, ''),
  RUNNING_BASTARD : new Mob('Running Bastard', 50, 1000, 4000, 4000, '')
}

Mob.Cosby = {
  MUSHMOUTH : new Mob('Mushmouth', 15, 40, 25, 45, ''),
  RUSSELL : new Mob('Russell', 10, 40, 50, 65, ''),
  WEIRD_HAROLD : new Mob('"Weird" Harold', 15, 80, 75, 85, ''),
  BUCKY : new Mob('Bucky', 13, 40, 50, 75, ''),
  FAT_ALBERT : new Mob('"Fat" Albert', 15, 100, 40, 150, ''),

  CLIFF : new Mob('"Cliff" Huxtable', 15, 60, 45, 55, ''),
  CLAIR : new Mob('Clair Hanks Huxtable', 10, 40, 50, 65, ''),
  THEO : new Mob('Theo', 17, 80, 75, 85, ''),
  VANESSA : new Mob('Vanessa', 13, 40, 50, 75, ''),
  RUDY : new Mob('Rudy', 1, 4, 5, 5, ''),
  WIZARD : new Mob('Wizard of Cos', 35, 400, 50, 673, ''),

  JELLO : new Mob('Jello Pudding', 15, 60, 45, 55, ''),
  PUDDING_POP : new Mob('Pudding Pop', 15, 160, 450, 550, ''),
  ZWE_BOP : new Mob('Zwe bop boobity-dot sha-bot!', 45, 400, 5738, 63, ''),

  SHADOW : new Mob('Shadow Cosby', 35, 160,  45,  55, ''),
  COSBY_POP : new Mob('Cosby Pop', 30, 260,  35,  65, ''),
  COS_BEAT : new Mob('Cos-beat', 45, 130,  46, 373, ''),
  COSBY : new Mob('Cosby', 10, 560, 435, 565, ''),
  COSBY_PRIME : new Mob('Cosby Prime', 100, 100, 738, 663, ''),

  BILL_COSBY : new Mob('Bill Cosby', 35, 460, 458, 555, ''),
  COSCHRIST : new Mob('Billesus Coschrist', 100, 1000, 7358, 6363, '')
}

Mob.RevengeOfTheSlimes = {
  SOLDIER : new Mob('Slime Soldier', 50, 500, 525, 545, ''),
  MAGE : new Mob('Slime Mage', 30, 300, 525, 545, ''),
  BERSERKER : new Mob('Slime Berserker', 150, 100, 525, 545, ''),
  CAPTAIN : new Mob('Slime Captain', 50, 700, 525, 1545, ''),
  SIX_MIL_KING : new Mob('6 Million Dollar Zombie True Slime King', 150, 3000, 400, 1500, '6milliondollarzombietrueslimeking'),

  WOMAN : new Mob('Slime Woman', 1, 1, 1, 1, ''),
  CHILD : new Mob('Slime Child', 1, 1, 1, 1, ''),
  CITIZEN : new Mob('Slime Citizen', 1, 1, 1, 1, ''),
  ELDER : new Mob('Slime Elder', 1, 1, 1, 1, ''),
  MECHA_SLIME_GOD : new Mob('Mecha-Slime-God', 150, 7000, 4000, 15000, '')
}

Mob.DragonBallZ = {
  CARROT : new Mob('Carrot', 51, 1200, 350, 555, ''),
  VEGETABLE : new Mob('Vegetable', 40, 1500, 330, 330, ''),
  RADISH : new Mob('Radish', 50, 1000, 250, 450, ''),
  CABBAGE : new Mob('Cabbage', 20, 690, 150, 150, ''),
  BROCCOLI : new Mob('Broccoli', 66, 1000, 550, 50, ''),
  BARDOCK : new Mob('Bardock', 1, 1, 1, 1, ''),

  BORGOS : new Mob('Borgos', 51, 1200, 350, 555, ''),
  FASHA : new Mob('Fasha', 40, 1500, 330, 330, ''),
  ONIO : new Mob('Onio', 50, 1000, 250, 450, ''),
  TARBLE : new Mob('Tarble', 20, 690, 150, 150, ''),
  SHUGESH : new Mob('Shugesh', 66, 1000, 550, 750, ''),
  SUPER_SAIYAN_BARDOCK : new Mob('Super Saiyan Bardock', 100, 10000, 100000, 100000, ''),

  SAIBA : new Mob('Saiba Mini Cells', 70, 3200, 3500, 5550, ''),
  KAIO_KEN_GOKU : new Mob('Kaio-ken Goku', 9001, 100, 1000000, 1000000, '')
}

Mob.Overleveled = {
  DICKMONSTER : new Mob('Metallic Dickmonster', 150, 400, 2050, 450, ''),
  PRIEST : new Mob('Priest Covered in Skulls', 100, 400, 5000, 650, ''),
  ARMY : new Mob('Army of Lesser Monsters', 105, 800, 7005, 850, ''),
  DRAGON : new Mob('Dragon of Burning Ice-Lightning', 103, 400, 5000, 750, ''),
  DEMON_JESUS : new Mob('Demon Jesus', 200, 666, 7045, 850, ''),
  SPOILER : new Mob('Potential Spoiler for Future Quests', 60, 6666, 7045, 1850, ''),
  LORD_FORNICUS : new Mob('Lord Fornicus and Kevin from <em>Cabin In The Woods</em>', 85, 250, 500, 500, ''),
  LEGENDARY : new Mob('Legendary Atma-Ruby-Emerald-Ultima-Crystal Weapon', 1000, 50, 5000, 650, ''),
  UNGODLY_GOD : new Mob('Ungodly God of Unholy Hellfire with Spikes Protruding from the Groin', 15, 100, 40, 150, '')
}