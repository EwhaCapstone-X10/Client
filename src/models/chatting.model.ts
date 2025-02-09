export type Summary = {
  session_id: number;
  year: number;
  started_at: Date;
  summary: string;
};

export type Detail = {
  chatId: number;
  date: Date;
  summary: string;
  keywords: string[];
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
