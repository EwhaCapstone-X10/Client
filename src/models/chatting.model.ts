export type Summary = {
  chatId: number;
  date: Date;
  summary: string | null;
};

export type Detail = {
  chatId: number;
  date: Date;
  summary: string;
  keywords: string;
  chatting: Chat[];
};

export type Chat = {
  idx: number;
  role: "user" | "gpt";
  chat: string;
};

export type SaveChat = {
  memberId: number;
  date: Date;
  chatting: Chat[];
};
