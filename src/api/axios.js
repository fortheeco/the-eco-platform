import axios from "axios";
import Cookies from "js-cookie";
// import { useAuthContext } from '../hooks/useAuthContext'

const api = axios.create({
  baseURL: "https://theeco.pythonanywhere.com/api",
});

api.interceptors.request.use((config) => {
  // const { state } = useAuthContext()
  let token = Cookies.get("token");

  // check of token already exists (user is logged in)
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }

  return config;
});

export default api;
