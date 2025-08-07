import { enterCalculationValue } from "./script.js";    

// partition.html의 각종 input들의 리스너

// VALIDATION
const $main_input = document.querySelector("#main_input");
const $part1 = document.querySelector("#part1");
const $part2 = document.querySelector("#part2");
const $part3 = document.querySelector("#part3");
const $part4 = document.querySelector("#part4");
const $part5 = document.querySelector("#part5");
const $part6 = document.querySelector("#part6");
const $part7 = document.querySelector("#part7");
const $part8 = document.querySelector("#part8");
const $part9 = document.querySelector("#part9");

$main_input.addEventListener("input", (e) => {
  const userInCount = e.target.valueAsNumber;
  localStorage.setItem("userInCount",userInCount);
  enterCalculationValue(userInCount,$part1,$part2,$part3,$part4,$part5,$part6,$part7,$part8,$part9);
});
$part1.addEventListener("input", () => enterCalculationValue(parseInt(localStorage.getItem("userInCount")) || 0,$part1,$part2,$part3,$part4,$part5,$part6,$part7,$part8,$part9));
$part2.addEventListener("input", () => enterCalculationValue(parseInt(localStorage.getItem("userInCount")) || 0,$part1,$part2,$part3,$part4,$part5,$part6,$part7,$part8,$part9));
$part3.addEventListener("input", () => enterCalculationValue(parseInt(localStorage.getItem("userInCount")) || 0,$part1,$part2,$part3,$part4,$part5,$part6,$part7,$part8,$part9));
$part4.addEventListener("input", () => enterCalculationValue(parseInt(localStorage.getItem("userInCount")) || 0,$part1,$part2,$part3,$part4,$part5,$part6,$part7,$part8,$part9));
$part5.addEventListener("input", () => enterCalculationValue(parseInt(localStorage.getItem("userInCount")) || 0,$part1,$part2,$part3,$part4,$part5,$part6,$part7,$part8,$part9));
$part6.addEventListener("input", () => enterCalculationValue(parseInt(localStorage.getItem("userInCount")) || 0,$part1,$part2,$part3,$part4,$part5,$part6,$part7,$part8,$part9));
$part7.addEventListener("input", () => enterCalculationValue(parseInt(localStorage.getItem("userInCount")) || 0,$part1,$part2,$part3,$part4,$part5,$part6,$part7,$part8,$part9));
$part8.addEventListener("input", () => enterCalculationValue(parseInt(localStorage.getItem("userInCount")) || 0,$part1,$part2,$part3,$part4,$part5,$part6,$part7,$part8,$part9));
$part9.addEventListener("input", () => enterCalculationValue(parseInt(localStorage.getItem("userInCount")) || 0,$part1,$part2,$part3,$part4,$part5,$part6,$part7,$part8,$part9));

// MAIN INPUT VALIDATION
const checkMinus = "0이상의 정수만 입력가능합니다. 입력값을 확인해주세요.";
const num_regexp = /^[1-9]\d*$/;

$main_input.addEventListener("input", (e) => {
  const {valueAsNumber} = e.target;
  if(!(e.target.value)) return;
  if(!(num_regexp.test(valueAsNumber))) return alert(checkMinus);
});