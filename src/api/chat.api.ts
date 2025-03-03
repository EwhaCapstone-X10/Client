import { SaveChat } from "@/models/chatting.model";
import { BASE_URL } from "@env";
import axios from "axios";

const baseURL = "http://43.203.100.235:8080";

// 대화 내역 저장
export const postChatting = async (message: SaveChat) => {
  const res = axios.post(`${baseURL}/chats`, message, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

// 대화 내역 목록 조회
export const getChatListMain = async (memberId: number) => {
  const res = axios.get(`${baseURL}/chats/list/${memberId}`, {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      size: 4,
      year: new Date().getFullYear(),
    },
  });
  return res;
};

export const getChatListYear = async (
  memberId: number,
  selectedYear: number
) => {
  const res = axios.get(`${baseURL}/chats/list/${memberId}`, {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      year: selectedYear,
    },
  });
  return res;
};

// 대화 상세 조회
export const getChatDetail = async (chatId: number) => {
  const res = axios.get(`${baseURL}/chats/${chatId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

// 대화 삭제
export const deleteChat = async (chatId: number) => {
  const res = axios.delete(`${baseURL}/chats/${chatId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
