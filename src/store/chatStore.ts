import { Chat, SaveChat } from "@/models/chatting.model";
import { create } from "zustand";

interface UserStore {
  chat: SaveChat;
  setChat: (chat: Chat[]) => void;
}

const useChatStore = create<UserStore>((set) => ({
  chat: {
    date: new Date(),
    chatting: [],
  },

  setChat: (chatting: Chat[]) =>
    set((state) => ({
      chat: { ...state.chat, chatting },
    })),
}));

export default useChatStore;
