import { User } from "@/models/user.model";
import axios from "axios";
import instance from "./axios";

const baseURL = "http://15.164.68.84:8080";

// 카카오 토큰 전송
export const postOauth = async (accessToken: string) => {
  try {
    const res = await axios.post(
      `${baseURL}/members/oauth/kakao`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.error("OAuth 요청 실패:", error);
    throw error;
  }
};

// 개인정보 저장 및 수정
export const postUserInfo = async (userInfo: User) => {
  const res = instance.post("/members", userInfo);
  return res;
};

// 개인 정보 조회
export const getUserInfo = async () => {
  const res = instance.get("/members/info");
  return res;
};
