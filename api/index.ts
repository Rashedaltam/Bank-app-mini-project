// Setup axios instance and to define the main base URL
import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-bank-project.eapi.joincoded.com/",
});

export default instance;
