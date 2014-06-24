// Utility functions for use throughout

// Nice Numbers
function nn(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

// Produces a well-formed mob
function construct_mob(inName, inStr, inHp, inGold, inXp) {
  return { name: inName, str: inStr, hp: inHp, gold: inGold, xp: inXp };
}