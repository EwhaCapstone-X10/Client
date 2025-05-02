import { SaveChat } from "@/models/chatting.model";
import instance from "./axios";

// 대화 내역 저장
export const postChatting = async (message: SaveChat) => {
  const res = instance.post("/chats", message);
  return res;
};

// 대화 내역 목록 조회
export const getChatListMain = async () => {
  const res = instance.get(`/chats/list`, {
    params: {
      size: 4,
      year: new Date().getFullYear(),
    },
  });
  return res;
};

export const getChatListYear = async (selectedYear: number) => {
  const res = instance.get(`/chats/list`, {
    params: {
      year: selectedYear,
    },
  });
  return res;
};

// 대화 상세 조회
export const getChatDetail = async (chatId: number) => {
  const res = instance.get(`/chats/${chatId}`);
  return res;
};

// 대화 삭제
export const deleteChat = async (chatId: number) => {
  const res = instance.delete(`/chats/${chatId}`);
  return res;
};
