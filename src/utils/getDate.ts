export default function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const zeroMonth = month < 10 ? '0' + month : month;
  const date = today.getDate();
  const day = today.getDay();

  const dayList = ['일', '월', '화', '수', '목', '금', '토'];

  return `${zeroMonth}.${date} ${dayList[day]}요일`;
}
