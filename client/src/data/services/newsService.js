import _ from "lodash";
import axios from "./axiosService";

export function getTCACalendarEvents(url) {
  return axios.get(url);
}