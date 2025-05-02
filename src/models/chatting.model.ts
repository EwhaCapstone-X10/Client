export type Summary = {
  chatId: number;
  date: Date;
  summary: string | null;
};

export type Detail = {
  chatId: number;
  date: Date;
  summary: string | null;
  keywords: string | null;
  chatting: Chat[];
};

export type Chat = {
  idx: number;
  role: "user" | "gpt";
  chat: string;
};

export type SaveChat = {
  date: Date;
  chatting: Chat[];
};
