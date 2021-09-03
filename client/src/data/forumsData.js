const forums = [
  {
    type: "Corvette Forums",
    list: [
      { name: "Corvette Forum", url: "https://www.corvetteforum.com/" },
      {
        name: "Corvette Forums",
        url: "https://www.corvetteforums.com/forum/",
      },
      {
        name: "Corvette Action Center",
        url: "https://forums.corvetteactioncenter.com/",
      },
      { name: "Stingray Forums", url: "https://www.stingrayforums.com/" },
      { name: "The Vette Barn", url: "https://www.thevettebarn.com/forums/" },
      {
        name: "Mid Engine Corvette Forum",
        url: "https://www.midenginecorvetteforum.com/",
      },
      { name: "Smokin' Vette", url: "https://www.smokinvette.com/" },
      { name: "r/Corvette", url: "https://www.reddit.com/r/Corvette/" },
      {
        name: "r/CorvetteRacing",
        url: "https://www.reddit.com/r/CorvetteRacing/",
      },
    ],
  },
  {
    type: "GM Forums",
    list: [
      { name: "GM Authority", url: "https://gmauthority.com/blog/forum/" },
      { name: "GM Forum", url: "https://www.gmforum.com/" },
      { name: "GM Inside News", url: "https://www.gminsidenews.com/forums/" },
      { name: "Chevrolet Forums", url: "https://chevroletforum.com/forum/" },
      { name: "Chevy Talk", url: "https://chevytalk.org/fusionbb/index.php" },
      { name: "r/Chevy", url: "https://www.reddit.com/r/Chevy/" },
      { name: "r/Chevrolet", url: "https://www.reddit.com/r/Chevy/" },
      { name: "r/GM", url: "https://www.reddit.com/r/Chevy/" },
    ],
  },
  {
    type: "LSx Forums",
    list: [
      { name: "LS1 Tech", url: "https://ls1tech.com/" },
      { name: "LS1.com", url: "https://www.ls1.com/forums/forum.php" },
      { name: "LS2.com", url: "https://www.ls2.com/forums/" },
      {
        name: "The LSX Forum",
        url: "https://www.pro-touring.com/forums/75-The-LSX-Forum",
      },
      {
        name: "LS Engine Talk",
        url: "https://www.racingjunk.com/forums/forumdisplay.php?f=21",
      },
      { name: "LS1 Truck", url: "http://www.ls1truck.com/forums/index.php" },
    ],
  },
  {
    type: "LTx Forums",
    list: [
      { name: "LS1 LT1", url: "https://www.ls1lt1.com/forums/" },
      { name: "LTX Tech", url: "http://www.ltxtech.com/forums/forum.php" },
      { name: "LT1 How To", url: "https://www.lt1howto.com/" },
    ],
  },
];

export function getForums() {
  return forums;
}
