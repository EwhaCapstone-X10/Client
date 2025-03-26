import { Chat, SaveChat } from "@/models/chatting.model";
import { create } from "zustand";

interface UserStore {
  chat: SaveChat;
  setId: (memberId: number) => void;
  setChat: (chat: Chat[]) => void;
}

const useChatStore = create<UserStore>((set) => ({
  chat: {
    memberId: 0,
    date: new Date(),
    chatting: [],
  },

  setId: (memberId: number) =>
    set((state) => ({
      chat: { ...state.chat, memberId },
    })),

  setChat: (chatting: Chat[]) =>
    set((state) => ({
      chat: { ...state.chat, chatting },
    })),
}));

export default useChatStore;
