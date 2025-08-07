import { addNavFooterEventListener } from "./script.js";

// 시작하자마자 바로 fetch한 뒤 대기
const navFetch = fetch("/partials/nav.html").then(res => res.text());
const footerFetch = fetch("/partials/footer.html").then(res => res.text());

// DOM들이 로딩되기 시작하면 그제서야 타겟받아와서 HTML에 넣어줌
document.addEventListener("DOMContentLoaded", async() => {
  const $nav = document.getElementById("nav_placeholder");
  const $footer = document.getElementById("footer_placeholder");
  // nav와 footer 요소들이 DOM로딩으로 생겼다면 해당페이지에 inner해줌
  if($nav) {
    $nav.innerHTML = await navFetch;
  }
  if($footer) {
    $footer.innerHTML = await footerFetch;
  }
  addNavFooterEventListener();
});
