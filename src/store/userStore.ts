import { User } from "@/models/user.model";
import { create } from "zustand";

interface UserStore {
  user: User;

  setName: (name: string) => void;
  setBirthdate: (birthdate: Date) => void;
  setSex: (sex: string) => void;
  setMode: (mode: string) => void;
  setOccupation: (occupation: string) => void;
  setHobby: (hobby: string[]) => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: {
    memberId: 0, // 나중에 로그인 후 response로 받아서 추가하기
    name: "",
    birthdate: "2005-01-01",
    sex: "",
    mode: "",
    occupation: "",
    hobby: [],
  },

  setName: (name: string) =>
    set((state) => ({
      user: { ...state.user, name },
    })),
  setBirthdate: (birthdate: Date) =>
    set((state) => ({
      user: { ...state.user, birthdate: birthdate.toISOString().split("T")[0] }, // 'YYYY-MM-DD'
    })),
  setSex: (sex: string) =>
    set((state) => ({
      user: { ...state.user, sex },
    })),
  setMode: (mode: string) =>
    set((state) => ({
      user: { ...state.user, mode },
    })),
  setOccupation: (occupation: string) =>
    set((state) => ({
      user: { ...state.user, occupation },
    })),
  setHobby: (hobby: string[]) =>
    set((state) => ({
      user: { ...state.user, hobby },
    })),
}));

export default useUserStore;
