import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_EXPRESS_SERVER;

const axiosService = {
  get: axios.get,
};

export default axiosService;
