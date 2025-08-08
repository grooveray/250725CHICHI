import { getDailyIntake } from "./script.js";
import { getSumMultiDailyIntake } from "./script.js";
import { addComma } from "./script.js";

const $remainCount1 = document.querySelector("#remain_count1");
const $remainCount2 = document.querySelector("#remain_count2");
const $remainCount3 = document.querySelector("#remain_count3");
const $remainCount4 = document.querySelector("#remain_count4");
const $upbringingDay1 = document.querySelector("#upbringing_day1");
const $upbringingDay2 = document.querySelector("#upbringing_day2");
const $upbringingDay3 = document.querySelector("#upbringing_day3");
const $upbringingDay4 = document.querySelector("#upbringing_day4");
const $feedResult1 = document.querySelector("#feed_result1");
const $feedResult2 = document.querySelector("#feed_result2");
const $feedResult3 = document.querySelector("#feed_result3");
const $feedResult4 = document.querySelector("#feed_result4");
const $multiply = document.querySelector("#multiply");
const $multiplyResult = document.querySelector("#multiply_result");

// 일일섭취량 값 학습
// length는 43으로 HTML input태그에서 43까지로 입력제한
const daily_intake = [
  0, 13, 17, 20, 23, 27, 31, 35, 39, 43, 48, 53, 58, 63, 69, 74, 80, 86, 92, 98,
  104, 110, 116, 122, 128, 134, 140, 146, 152, 157, 163, 168, 173, 178, 183,
  187, 192, 196, 200, 204, 208, 211, 215,
];

let result_obj = {};

// METHOD START <-- 이 메소드 부분은 시간이 생길때, 어떻게 보기좋게 리팩토링할지 고민해보자
function getInputEvent(target) {
  target.addEventListener("input", (e) => {
    const { valueAsNumber } = e.target;
    const { name } = e.target;
    result_obj[name] = valueAsNumber || 0;

    // 입력값에 해당하는 항목을 변수에 할당하고
    // 1번째 줄에 입력했다면 1번째줄의 일일섭취량 결과를 계산하여 보여줌
    switch (name) {
      case "remain_count1":
      case "upbringing_day1":
        const result1 = getDailyIntake(
          daily_intake,
          result_obj["upbringing_day1"],
          result_obj["remain_count1"]
        );
        result_obj.feed_result1 = result1;
        break;
      case "remain_count2":
      case "upbringing_day2":
        const result2 = getDailyIntake(
          daily_intake,
          result_obj["upbringing_day2"],
          result_obj["remain_count2"]
        );
        result_obj.feed_result2 = result2;
        break;
      case "remain_count3":
      case "upbringing_day3":
        const result3 = getDailyIntake(
          daily_intake,
          result_obj["upbringing_day3"],
          result_obj["remain_count3"]
        );
        result_obj.feed_result3 = result3;
        break;
      default:
        break;
    }
    // 인풋변동이 있을때마다 해당계군의 일섭취량에 값넣어주기
    $feedResult1.textContent = addComma(result_obj.feed_result1);
    $feedResult2.textContent = addComma(result_obj.feed_result2);
    $feedResult3.textContent = addComma(result_obj.feed_result3);
    // 현재수수 계(합계)
    const count1 = result_obj.remain_count1 || 0;
    const count2 = result_obj.remain_count2 || 0;
    const count3 = result_obj.remain_count3 || 0;
    const sum_count = count1 + count2 + count3;
    const remain_result4 = addComma(sum_count);
    $remainCount4.textContent = remain_result4;
    // 사육일수 계(평균)
    const day1 = result_obj.upbringing_day1 || 0;
    const day2 = result_obj.upbringing_day2 || 0;
    const day3 = result_obj.upbringing_day3 || 0;
    const day_arr = [day1, day2, day3];
    const true_count = day_arr.length
      ? day_arr.filter((unit) => unit).length
      : 0;
    $upbringingDay4.textContent = true_count
      ? ((day1 + day2 + day3) / true_count).toFixed(2)
      : 0;
    // 일섭취량 계(합계)
    const result1 = result_obj.feed_result1 || 0;
    const result2 = result_obj.feed_result2 || 0;
    const result3 = result_obj.feed_result3 || 0;
    const sum_result = result1 + result2 + result3;
    const feed_result4 = addComma(sum_result);
    $feedResult4.textContent = feed_result4;

    // 섭취량근거로 예상날짜 곱해보기
    const multiply = result_obj["multiply"] || 0;
    // 계산할 일수를 반영한 1계군의 일섭취량 합계
    const multiply_sum1 = getSumMultiDailyIntake(
      daily_intake,
      result_obj["upbringing_day1"] || 0,
      result_obj["remain_count1"] || 0,
      multiply
    );
    // 계산할 일수를 반영한 2계군의 일섭취량 합계
    const multiply_sum2 = getSumMultiDailyIntake(
      daily_intake,
      result_obj["upbringing_day2"] || 0,
      result_obj["remain_count2"] || 0,
      multiply
    );
    // 계산할 일수를 반영한 3계군의 일섭취량 합계
    const multiply_sum3 = getSumMultiDailyIntake(
      daily_intake,
      result_obj["upbringing_day3"] || 0,
      result_obj["remain_count3"] || 0,
      multiply
    );
    // 모든 계군의 일섭취량 합계를 배열화
    const multiply_sum_arr = [multiply_sum1, multiply_sum2, multiply_sum3];
    // 해당 배열에는 false가 나올수 없으므로 바로 reduce해줌
    const total_multiply_sum = multiply_sum_arr.reduce(
      (prev, curr) => prev + curr
    );
    // 1000단위 콤마, 해당 sum이 false일 가능성이 있으므로 0리턴로직 작성
    const feed_multi_result4 = addComma(total_multiply_sum) || 0;
    // 해당 노드에 결과값 표시
    $multiplyResult.textContent = feed_multi_result4;
    return;
  });
}
// METHOD END

getInputEvent($remainCount1);
getInputEvent($remainCount2);
getInputEvent($remainCount3);
getInputEvent($upbringingDay1);
getInputEvent($upbringingDay2);
getInputEvent($upbringingDay3);
getInputEvent($multiply);
