// import axios from "axios";

// export async function getRssFeed() {
//     try {
//         const {data} = await axios.get("https://www.corvsport.com/corvette-news/feed/");
//         console.log(data);
//     }
//     catch (ex) {
//         console.log(ex);
//     }
// }

const news = [
  {
    name: "Corvette News",
    url: "http://corvettenews.com/",
  },
  {
    name: "GM Authority",
    url: "https://gmauthority.com/blog/",
  },
  {
    name: "Corvette Blogger",
    url: "https://www.corvetteblogger.com/",
  },
  {
    name: "CorvSport",
    url: "https://www.corvsport.com/",
  },
  {
    name: "Corvette Action Center",
    url: "https://www.corvetteactioncenter.com/",
  },
];

export function getNews() {
  return news;
}
