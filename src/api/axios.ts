import axios, { AxiosInstance } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseURL = "http://43.203.100.235:8080";

const instance: AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});

instance.interceptors.request.use(
  async (config) => {
    try {
      const jwtToken = await AsyncStorage.getItem("jwtToken");

      if (jwtToken) {
        config.headers.Authorization = `Bearer ${jwtToken}`;
      }
    } catch (error) {
      console.error("Error retrieving token: ", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
