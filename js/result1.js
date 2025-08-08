import { customMakeNum } from "./script.js";
import { parseItem } from "./script.js";

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

// result1.js의 버튼에서 shareEmail과 shareSMS를 사용할 수 있도록 global변수로 선언함
window.shareEmail = function () {
  const subject = encodeURIComponent("사육성적 계산결과");
  const body = encodeURIComponent(resultText);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
};
window.shareSMS = function () {
  const body = encodeURIComponent(resultText);
  window.location.href = `sms:?body=${body}`;
};
