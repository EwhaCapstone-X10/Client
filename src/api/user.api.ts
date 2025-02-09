import { User } from "@/models/user.model";
import { BASE_URL } from "@env";
import axios from "axios";

const baseURL = BASE_URL;

// 개인정보 저장 및 수정
export const postUserInfo = async (userInfo: User) => {
  const res = axios.post(`${baseURL}/members`, userInfo, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
