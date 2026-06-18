export const LIFE_TOKEN_IMAGES = {
  default: "./img/Life.webp",
  pink: "./img/Life_pink.webp",
  red: "./img/Life_red.webp",
  blue: "./img/Life_blue.webp",
  green: "./img/Life_ereen.webp",
  yellow: "./img/Life_yellow.webp",
  white: "./img/Life_white.webp",
  cyan: "./img/Life_cyan.webp",
  violet: "./img/Life_violet.webp",
  christmas: "./img/Life_christmas.webp",
  valentines: "./img/Life_valentines.webp",
  transparent: "./img/Life_transparent.webp",
};

export function getLifeTokenStyle(grimoire, player) {
  const selectedLife =
    LIFE_TOKEN_IMAGES[grimoire.tokenColorStyle] || LIFE_TOKEN_IMAGES.default;

  return {
    backgroundImage: player.isDead
      ? `url(${selectedLife}), url(./img/Death.webp)`
      : `url(${selectedLife})`,
    backgroundSize: player.isDead ? "58%, 100%" : "100%",
    backgroundPosition: player.isDead ? "center 38%, center" : "center",
    backgroundRepeat: player.isDead ? "no-repeat, no-repeat" : "no-repeat",
  };
}

export const TOKEN_COLOR_LABELS = {
  default: "Classic",
  pink: "Pink",
  red: "Red",
  blue: "Blue",
  green: "Green",
  yellow: "Yellow",
  white: "White",
  cyan: "Cyan",
  violet: "Violet",
  christmas: "Christmas",
  valentines: "Valentine's",
  transparent: "Transparent",
};

export const MILAVER_ICON_NAMES = {
  amnesiac: "Amnesiac",
  artist: "Artist",
  assassin: "Assassin",
  cannibal: "Cannibal",
  cerenovus: "Cerenovus",
  choirboy: "Choirboy",
  clockmaker: "Clockmaker",
  drunk: "Drunk",
  empath: "Empath",
  fanggu: "FangGu",
  farmer: "Farmer",
  fisherman: "Fisherman",
  fortuneteller: "FortuneTeller",
  godfather: "Godfather",
  gossip: "Gossip",
  imp: "Imp",
  innkeeper: "Innkeeper",
  investigator: "Investigator",
  klutz: "Klutz",
  librarian: "Librarian",
  lunatic: "Lunatic",
  mathematician: "Mathematician",
  monk: "Monk",
  mutant: "Mutant",
  oracle: "Oracle",
  philosopher: "Philosopher",
  po: "Po",
  politician: "Politician",
  professor: "Professor",
  ravenkeeper: "Ravenkeeper",
  recluse: "Recluse",
  saint: "Saint",
  savant: "Savant",
  scarletwoman: "ScarletWoman",
  seamstress: "Seamstress",
  shabaloth: "Shabaloth",
  shugenja: "Shugenja",
  slayer: "Slayer",
  soldier: "Soldier",
  summoner: "Summoner",
  tealady: "TeaLady",
  towncrier: "TownCrier",
  townsfolk: "Townsfolk",
  vigormortis: "Vigormortis",
  villageidiot: "VillageIdiot",
  witch: "Witch",
};

export const FOLDER_ICON_ROLE_IDS = new Set(
  Object.keys(MILAVER_ICON_NAMES).filter((iconId) => iconId !== "townsfolk")
);

export const ROOT_FOLDER_ICON_ROLE_IDS = new Set([
  "angel",
  "bootlegger",
  "djinn",
  "knaves",
]);

export const MILAVER_ROOT_ICON_NAMES = {
  angel: "zAngel",
  bootlegger: "zBootlegger",
  djinn: "zDjinn",
  knaves: "zKnaves",
};

export function getFolderRoleIconPath(iconId, alignmentIndex, isUnofficial) {
  const sourceFolder = isUnofficial ? "UnofficialIcons" : "OfficialIcons";
  const sourceSuffix = isUnofficial ? "Unofficial" : "Official";

  if (ROOT_FOLDER_ICON_ROLE_IDS.has(iconId)) {
    return `./img/${sourceFolder}/${iconId}_${sourceSuffix}.webp`;
  }

  if (!FOLDER_ICON_ROLE_IDS.has(iconId)) {
    return null;
  }

  const variantFolder = alignmentIndex > 0 ? "Altalign" : "Default";
  const alignSuffix = alignmentIndex > 0 ? "_altalign" : "";

  return `./img/${sourceFolder}/${variantFolder}/${iconId}${alignSuffix}_${sourceSuffix}.webp`;
}

export function getMilaVerIconPath(iconId, alignmentIndex) {
  const milaName = MILAVER_ICON_NAMES[iconId];
  const milaRootName = MILAVER_ROOT_ICON_NAMES[iconId];

  if (milaName) {
    return alignmentIndex > 0
      ? `./img/MilaIcons/Altalign/${milaName}_altalign_MilaVer.webp`
      : `./img/MilaIcons/Default/${milaName}_MilaVer.webp`;
  }

  if (milaRootName) {
    return `./img/MilaIcons/${milaRootName}_MilaVer.webp`;
  }

  if (iconId === "good") {
    return "./img/MilaIcons/zGood_MilaVer.webp";
  }

  if (iconId === "evil") {
    return "./img/MilaIcons/zEvil_MilaVer.webp";
  }

  return null;
}

export const MILAVER_MISC_ICON_PATHS = {
  shroud: "../img/MilaIcons/zShroud_MilaVer.webp",
  reminderPlus: "../img/MilaIcons/zPlus_MilaVer.webp",
  reminderX: "../img/MilaIcons/zX.webp",
  leafOrange: "../img/MilaIcons/zLeafOrange_MilaVer.webp",
  leafTop2: "../img/MilaIcons/zLeafTop2_MilaVer.webp",
  leafTop3: "../img/MilaIcons/zLeafTop3_MilaVer.webp",
  leafTop4: "../img/MilaIcons/zLeafTop4_MilaVer.webp",
  leafTop5: "../img/MilaIcons/zLeafTop5_MilaVer.webp",
  leafTop6: "../img/MilaIcons/zLeafTop6_MilaVer.webp",
  leafTop7: "../img/MilaIcons/zLeafTop7_MilaVer.webp",
  infoDemonHead: "../img/MilaIcons/zDemonHead2.webp",
  voteDemonHead: "../img/MilaIcons/zDemonHead.webp",
};

export const ROLE_ICON_OPTIONS = ["official", "unofficial", "milaver"];

export const TOKEN_COLOR_OPTIONS = [
  "default",
  "pink",
  "red",
  "blue",
  "green",
  "yellow",
  "white",
  "cyan",
  "violet",
  "christmas",
  "valentines",
];
