import axios from "axios";

const instance = axios.create({
    // proxy: false,
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
    // baseURL: window.location.hostname
  });

export default instance;