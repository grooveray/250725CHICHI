// nav.html파일 로딩이 완료되고나면 각 버튼에 기능활성화
export function addNavFooterEventListener() {
  // variants
  let pagePosition = localStorage.getItem("pagePosition") || "index";

  const indexPage = "./index.html";
  const calculatorPage = "./calculate.html";
  const partitionPage = "./partition.html";
  const feedamountPage = "./feedamount.html";

  const $btn_calc = document.querySelector("#menu_calc");
  const $btn_part = document.querySelector("#menu_part");
  const $btn_feed = document.querySelector("#menu_feed");
  const $favicon = document.querySelector("#favicon");

  // display control
  switch (pagePosition) {
    // case "index":
    //   $btn_main.className = "btn_activate";
    //   break;
    case "calculate":
      $btn_calc.className = "btn_activate";
      break;
    case "partition":
      $btn_part.className = "btn_activate";
      break;
    case "feedamount":
      $btn_feed.className = "btn_activate";
      break;
    default:
      break;
  }

  $btn_calc.addEventListener("click", () => {
    localStorage.setItem("pagePosition", "calculate");
    location.href = calculatorPage;
  });
  $btn_part.addEventListener("click", () => {
    localStorage.setItem("pagePosition", "partition");
    location.href = partitionPage;
  });
  $btn_feed.addEventListener("click", () => {
    localStorage.setItem("pagePosition", "feedamount");
    location.href = feedamountPage;
  });
  $favicon.addEventListener("click", () => {
    localStorage.setItem("pagePosition", "index");
    location.href = indexPage;
  });
}

// FOR partition.js
// 유저의 입력값과 9개동의노드를 받아와서 가공해서 각 9개노드의 result칸에 입력해줌
export function enterCalculationValue(
  userInCount,
  $part1,
  $part2,
  $part3,
  $part4,
  $part5,
  $part6,
  $part7,
  $part8,
  $part9
) {
  const part1 = $part1.valueAsNumber || 0;
  const part2 = $part2.valueAsNumber || 0;
  const part3 = $part3.valueAsNumber || 0;
  const part4 = $part4.valueAsNumber || 0;
  const part5 = $part5.valueAsNumber || 0;
  const part6 = $part6.valueAsNumber || 0;
  const part7 = $part7.valueAsNumber || 0;
  const part8 = $part8.valueAsNumber || 0;
  const part9 = $part9.valueAsNumber || 0;
  const $part1_result = document.querySelector("#part1_result");
  const $part2_result = document.querySelector("#part2_result");
  const $part3_result = document.querySelector("#part3_result");
  const $part4_result = document.querySelector("#part4_result");
  const $part5_result = document.querySelector("#part5_result");
  const $part6_result = document.querySelector("#part6_result");
  const $part7_result = document.querySelector("#part7_result");
  const $part8_result = document.querySelector("#part8_result");
  const $part9_result = document.querySelector("#part9_result");
  const $remain = document.querySelector("#remain");
  const $totalPercent = document.querySelector("#total_percent");

  // 합계 %가 100을 넘지 않도록 설정
  let partArr = [part1, part2, part3, part4, part5, part6, part7, part8, part9];
  // check100Percent(partArr);

  const getCalcVal1 = rtnValueArr(userInCount, partArr)[0] || 0;
  const getCalcVal2 = rtnValueArr(userInCount, partArr)[1] || 0;
  const getCalcVal3 = rtnValueArr(userInCount, partArr)[2] || 0;
  const getCalcVal4 = rtnValueArr(userInCount, partArr)[3] || 0;
  const getCalcVal5 = rtnValueArr(userInCount, partArr)[4] || 0;
  const getCalcVal6 = rtnValueArr(userInCount, partArr)[5] || 0;
  const getCalcVal7 = rtnValueArr(userInCount, partArr)[6] || 0;
  const getCalcVal8 = rtnValueArr(userInCount, partArr)[7] || 0;
  const getCalcVal9 = rtnValueArr(userInCount, partArr)[8] || 0;

  $part1_result.textContent = addComma(getCalcVal1);
  $part2_result.textContent = addComma(getCalcVal2);
  $part3_result.textContent = addComma(getCalcVal3);
  $part4_result.textContent = addComma(getCalcVal4);
  $part5_result.textContent = addComma(getCalcVal5);
  $part6_result.textContent = addComma(getCalcVal6);
  $part7_result.textContent = addComma(getCalcVal7);
  $part8_result.textContent = addComma(getCalcVal8);
  $part9_result.textContent = addComma(getCalcVal9);

  // 입력한 총입추수수 중 입력%로 사용되어진 마릿수를 제외한 나머지를 #remain에 입력;
  // 토탈 %합계도 사용자에게 보여줌
  let useCount;
  useCount = rtnValueArr(userInCount, partArr).reduce(
    (prev, curr) => prev + curr
  );
  const remain = userInCount - useCount;
  $remain.textContent = addComma(remain);
  const total_percent = partArr.reduce((prev, curr) => prev + curr);
  $totalPercent.textContent = total_percent || 0;
}

// 100단위에서 반올림하는 배열로 바꾸어 리턴(length = 9)
// 반올림한 뒤, 각 %에 해당하는 마릿수로 바꾸어 배열로 저장
export function rtnValueArr(userInCount, partArr) {
  return partArr.map(p => p > 0 ? Math.round(userInCount * (p/100) / 100) * 100 : 0);
};
 // 숫자를 받아서 천단위 콤마찍어 문자열로 반환
export function addComma(number) {
  if(!number) return 0;
  return number.toLocaleString();
};


// FOR feedamount.js

// 일일섭취량 기준표와 사육일수, 남은수수를 가지고 일일섭취량을 계산해줌
export function getDailyIntake(dailyIntakeArr, upbringingDay, remainCount) {
  // 일일섭취량표에서 값을 찾아오고
  const findIntake = dailyIntakeArr[upbringingDay];
  // g단위를 kg단위로 바꾸고
  const transKG = findIntake / 1000;
  // 구한값을 현재수수와 곱해주고
  const calcIntake = transKG * remainCount;
  // 소수점이하는 반올림하고
  const roundIntake = Math.round(calcIntake);
  // 이렇게 가공한 값이 false일 경우, 0을 리턴
  if (!roundIntake) return 0;
  return roundIntake;
};

// 계산할 일수 값을 구하기 위해 입력사육일수에서 +일수만큼 일일섭취량을 찾아서 더해줌
// 사육일수가 0이거나 없을 경우, 해당 데이터가 합산되지 않게 하기
export function getSumMultiDailyIntake(
  dailyIntakeArr,
  upbringingDay,
  remainCount,
  multiplyDay
) {
  let dailyIntakeResultArr = [];
  for (let i = 0; i < multiplyDay; i++) {
    const data = !upbringingDay
      ? 0
      : getDailyIntake(dailyIntakeArr, upbringingDay + i, remainCount);
    dailyIntakeResultArr.push(data);
  }
  if (!dailyIntakeResultArr.length) {
    return 0;
  } else {
    const sum = dailyIntakeResultArr.reduce((prev, curr) => prev + curr);
    return sum;
  }
}

// FOR result1.js
// 로컬스토리지에 있는 아이템을 "아이템명"을 입력하여 꺼내옴
export function parseItem(itemName) {
  const response = localStorage.getItem(itemName);
  const parseData = JSON.parse(response);
  if (!parseData) return alert("데이터가 없습니다.");
  return parseData;
};
// 원하는 형태로 소수점 정리
export function customMakeNum(day, in_count, out_count, total_weight, feed_amount) {
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
};