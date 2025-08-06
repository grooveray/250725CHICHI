// nav.html파일과 footer.hml파일을 불러오는 코드
export function loadNavFooter(listner) {
  fetch("/partials/nav.html")
    .then(res => res.text())
    .then(nav_html => {
      document.getElementById("nav_placeholder").innerHTML = nav_html;
      fetch('/partials/footer.html')
        .then(res => res.text())
        .then(footer_html => {
          document.getElementById("footer_placeholder").innerHTML = footer_html;
          // 두 파일을 모두 불러오고 나면 script.js에 있는 버튼기능 코드 활성화
          listner();
        });
    });
};
