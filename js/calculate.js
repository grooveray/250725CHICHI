// variant
const $form_calc = document.querySelector("#form_calc");
const day = document.querySelector("#day");
const feed_amount = document.querySelector("#feed_amount");
const in_count = document.querySelector("#in_count");
const out_count = document.querySelector("#out_count");
const total_weight = document.querySelector("#total_weight");

const checkMinus = "0이상의 정수만 입력가능합니다. 입력값을 확인해주세요.";
const checkDay =
  "사육일수는 소수점이하 2자리까지의 양의 정수만 입력가능합니다.";
const day_regexp = /^(?:[1-9]\d*|0)(?:\.\d{1,2})?$/;
const num_regexp = /^[1-9]\d*$/;

day.addEventListener("input", (e) => {
  let { value } = e.target;
  if (!value) return;
  let valueAsNumber = parseFloat(value);
  if (!day_regexp.test(valueAsNumber)) return alert(checkDay);
});
feed_amount.addEventListener("input", (e) => {
  let { valueAsNumber } = e.target;
  if (!e.target.value) return;
  if (!num_regexp.test(valueAsNumber)) return alert(checkMinus);
});
in_count.addEventListener("input", (e) => {
  let { valueAsNumber } = e.target;
  if (!e.target.value) return;
  if (!num_regexp.test(valueAsNumber)) return alert(checkMinus);
});
out_count.addEventListener("input", (e) => {
  let { valueAsNumber } = e.target;
  if (!e.target.value) return;
  if (!num_regexp.test(valueAsNumber)) return alert(checkMinus);
});
total_weight.addEventListener("input", (e) => {
  let { valueAsNumber } = e.target;
  if (!e.target.value) return;
  if (!num_regexp.test(valueAsNumber)) return alert(checkMinus);
});

// form_calc
$form_calc.addEventListener("submit", (e) => {
  let inputs = {};
  for (let i = 0; i < 5; i++) {
    const { name, value } = e.target[i];
    inputs = { ...inputs, [name]: value };
  }
  const { day, feed_amount, in_count, out_count, total_weight } = inputs;
  if (!(day && feed_amount && in_count && out_count && total_weight)) {
    e.preventDefault();
    return alert("미입력칸이 있습니다. 전부 입력해주세요.");
  }
  const data = JSON.stringify(inputs);
  localStorage.setItem("data", data);
});
