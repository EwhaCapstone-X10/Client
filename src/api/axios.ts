import axios, { AxiosInstance } from "axios";

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
      const jwtToken =
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzOTQ0OTUwMTQ4IiwiaWF0IjoxNzUwMjYxMDA0LCJleHAiOjE3NTA4NjU4MDR9.BPe9vohVQUcKHumkbM5pXjTVu03cZGdAxvZAN6b0D7M";

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
