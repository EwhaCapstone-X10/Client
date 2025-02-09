export const getDate = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${month}월 ${day}일 ${hour}:${minute}`;
};
