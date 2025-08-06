// nav.html파일 로딩이 완료되고나면 각 버튼에 기능활성화
export function addNavFooterEventListener() {
  // variants
  let pagePosition = localStorage.getItem("pagePosition") || "index";

  const indexPage = './index.html';
  const calculatorPage = './calculate.html';
  const partitionPage = './partition.html';
  const feedamountPage = './feedamount.html';

  // const $mainmenuTitle = document.querySelector(".mainmenu_title");
  // const $btn_main = document.querySelector("#menu_home");
  const $btn_calc = document.querySelector("#menu_calc");
  const $btn_part = document.querySelector("#menu_part");
  const $btn_feed = document.querySelector("#menu_feed");
  const $favicon = document.querySelector("#favicon");

  // display control
  switch(pagePosition) {
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

  // location event
  // $btn_main.addEventListener("click", () => {
  //   localStorage.setItem("pagePosition","index");
  //   location.href = indexPage;
  // });
  $btn_calc.addEventListener("click", () => {
    localStorage.setItem("pagePosition","calculate");
    location.href = calculatorPage;
  });
  $btn_part.addEventListener("click", () => {
    localStorage.setItem("pagePosition","partition");
    location.href = partitionPage;
  });
  $btn_feed.addEventListener("click", () => {
    localStorage.setItem("pagePosition","feedamount");
    location.href = feedamountPage;
  });
  $favicon.addEventListener("click", () => {
    localStorage.setItem("pagePosition","index");
    location.href = indexPage;
  });

}