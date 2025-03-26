import instance from "./axios";

// 대화 내역 저장
export const getStretching = async () => {
  const res = instance.get("/stretching");
  return res;
};
