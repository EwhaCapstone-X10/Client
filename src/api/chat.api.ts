import { SaveChat } from "@/models/chatting.model";
import { BASE_URL } from "@env";
import axios from "axios";

const baseURL = BASE_URL;

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
export const getChatListMain = async () => {
  const res = axios.get(`${baseURL}/chats`, {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      size: 4,
      year: 2025,
    },
  });
  return res;
};

export const getChatListYear = async (selectedYear: number) => {
  const res = axios.get(`${baseURL}/chats`, {
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
