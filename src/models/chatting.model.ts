export type Summary = {
  id: number;
  year: number;
  date: string;
  summary: string;
};

export type Detail = {
  date: string;
  summary: string;
  keywords: string[];
  chatting: Chat[];
};

export type Chat = {
  id: number;
  role: string;
  chat: string;
};
