// 리팩토링 필요!!!!!

// METHOD START
// 로컬스토리지에 있는 아이템을 "아이템명"을 입력하여 꺼내옴
function parseItem(itemName) {
  const response = localStorage.getItem(itemName);
  const parseData = JSON.parse(response);
  if (!parseData) return alert("데이터가 없습니다.");
  return parseData;
}
// 원하는 형태로 소수점 정리
function customMakeNum(day, in_count, out_count, total_weight, feed_amount) {
  const ubbringingDay = parseFloat(day);
  const inCount = parseFloat(in_count);
  const outCount = parseFloat(out_count);
  const totalWeight = parseFloat(total_weight);
  const feedAmount = parseFloat(feed_amount);
  const averageWeight = (totalWeight / outCount).toFixed(3);
  const feedEfficiency = (feedAmount / totalWeight).toFixed(3);
  const upbringingRate = ((outCount / inCount) * 100).toFixed(1);
  const productIndex = (
    ((upbringingRate * averageWeight) / (ubbringingDay * feedEfficiency)) *
    100
  ).toFixed(2);
  return {
    ubbringingDay,
    inCount,
    outCount,
    totalWeight,
    feedAmount,
    averageWeight,
    feedEfficiency,
    upbringingRate,
    productIndex,
  };
}
//METHOD END
// 페이지가 로딩될때, localStorage에 있는 변수값들을 가져와서 사용
// document.addEventListener("DOMContentLoaded", () => {
//   const parseData = parseItem("data");
//   const {day, in_count, out_count, total_weight, feed_amount } = parseData;
//   const {ubbringingDay, inCount, outCount, totalWeight, feedAmount, averageWeight, feedEfficiency, upbringingRate, productIndex} =
//     customMakeNum(day, in_count, out_count, total_weight, feed_amount);

//   if (!(ubbringingDay && inCount && outCount && totalWeight && feedAmount && averageWeight && feedEfficiency && upbringingRate && productIndex)) return alert("누락된 값이 있습니다. 계산을 완료할 수 없습니다.");

//   document.getElementById("day").innerText = ubbringingDay;
//   document.getElementById("in_count").innerText = inCount.toLocaleString();
//   document.getElementById("out_count").innerText = outCount.toLocaleString();
//   document.getElementById("total_weight").innerText = totalWeight.toLocaleString();
//   document.getElementById("feed_amount").innerText = feedAmount.toLocaleString();
//   document.getElementById("average_weight").innerText = averageWeight;
//   document.getElementById("feed_efficiency").innerText = feedEfficiency;
//   document.getElementById("product_index").innerText = productIndex;
//   document.getElementById("upbringing_rate").innerText = upbringingRate;
// });

const parseData = parseItem("data");
const { day, in_count, out_count, total_weight, feed_amount } = parseData;
const {
  ubbringingDay,
  inCount,
  outCount,
  totalWeight,
  feedAmount,
  averageWeight,
  feedEfficiency,
  upbringingRate,
  productIndex,
} = customMakeNum(day, in_count, out_count, total_weight, feed_amount);

document.getElementById("day").innerText = ubbringingDay;
document.getElementById("in_count").innerText = inCount.toLocaleString();
document.getElementById("out_count").innerText = outCount.toLocaleString();
document.getElementById("total_weight").innerText =
  totalWeight.toLocaleString();
document.getElementById("feed_amount").innerText = feedAmount.toLocaleString();
document.getElementById("average_weight").innerText = averageWeight;
document.getElementById("feed_efficiency").innerText = feedEfficiency;
document.getElementById("product_index").innerText = productIndex;
document.getElementById("upbringing_rate").innerText = upbringingRate;

const resultText = [
  `🎯사육일수: ${ubbringingDay}일`,
  `🎯입추수수: ${inCount.toLocaleString()}수`,
  `🎯출하수수: ${outCount.toLocaleString()}수`,
  `🎯출하중량: ${totalWeight.toLocaleString()}kg`,
  `🎯총사료량: ${feedAmount.toLocaleString()}kg`,
  `🎯평균체중: ${averageWeight}kg`,
  `🎯사료효율: ${feedEfficiency}`,
  `🎯생산지수: ${productIndex}`,
  `🎯육 성 율: ${upbringingRate}%`,
  "👉 계산하러가기: https://chichi119.netlify.app",
].join("\n");

window.shareEmail = function () {
  const subject = encodeURIComponent("사육성적 계산결과");
  const body = encodeURIComponent(resultText);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
};
window.shareSMS = function () {
  const body = encodeURIComponent(resultText);
  window.location.href = `sms:?body=${body}`;
};
