import { User } from "@/models/user.model";
import { BASE_URL } from "@env";
import axios from "axios";

const baseURL = "http://43.203.100.235:8080";

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
  const res = axios.post(`${baseURL}/members`, userInfo, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

// 개인 정보 조회
export const getUserInfo = async (memberId: number) => {
  const res = axios.get(`${baseURL}/members/info/${memberId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
