import axios, { AxiosInstance } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance: AxiosInstance = axios.create({
  baseURL: "http://3.39.174.69:8080",
  timeout: 10000,
  headers: {
    "Accept-Encoding": "identity", // gzip, deflate 제거
  },
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
