import _ from "lodash";
import axios from "./axiosService";

export function getGalleryImages(url) {
  return axios.get(url);
}

export function searchOptions(name, arr) {
  return [...setOptions(name, arr)];
}

function setOptions(option, imageArr) {
  const galleryLinks = [...imageArr];
  let optionArr = [];
  galleryLinks.forEach((y) => {
    if (optionArr.indexOf(y[option]) === -1) {
      optionArr.push(y[option]);
    }
  });

  return sortOptions(optionArr);
}

function sortOptions(arr) {
  const sorted = _.orderBy(arr, null, "desc");

  return sorted;
}
