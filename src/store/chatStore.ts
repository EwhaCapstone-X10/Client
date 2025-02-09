import { Chat, SaveChat } from "@/models/chatting.model";
import { create } from "zustand";

interface UserStore {
  chat: SaveChat;

  setChat: (chat: Chat[]) => void;
}

const useChatStore = create<UserStore>((set) => ({
  chat: {
    memberId: 0, // 나중에 로그인 후 response로 받아서 추가하기
    date: new Date(),
    chatting: [],
  },

  setChat: (chatting: Chat[]) =>
    set((state) => ({
      chat: { ...state.chat, chatting },
    })),
}));

export default useChatStore;
