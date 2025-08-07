const my_js_key = "02fc77230a6bd1c5b489f52ff22ec258";
const title = "CHICHI119";
const description = "육계사육 성적표";
const site = "https://chichi119.netlify.app";

// 1. SDK 초기화
if(!window.Kakao.isInitialized()) {
  window.Kakao.init(my_js_key);
};

// 2. 공유 함수 (index.html내부에서 shareKakao함수를 사용할 수 있도록 전역등록)
window.shareKakao =  function () {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title,
      description,
      imageUrl: `${site}/icon-512.png`, // 필수: 썸네일 이미지
      link: {
        mobileWebUrl: window.location.href,
        webUrl: window.location.href
      }
    },
    buttons: [
      {
        title: '웹사이트로 이동',
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href
        }
      }
    ]
  });
};

