import { BASE_URL } from "@env";
import axios from "axios";

const baseURL = "http://43.203.100.235:8080";

// 대화 내역 저장
export const getStretching = async () => {
  const res = axios.get(`${baseURL}/stretching`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
