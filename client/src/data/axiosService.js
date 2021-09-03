import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_EXPRESS_SERVER;

export default {
  get: axios.get,
};
