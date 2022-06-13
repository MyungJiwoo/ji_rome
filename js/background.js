const images = [
    "https://t1.daumcdn.net/cfile/tistory/99A9CA3E5ACCAF6322",
    "https://i.pinimg.com/originals/d6/42/6b/d6426b150d8635c8a058f393bf7386a1.jpg",
    "https://blog.kakaocdn.net/dn/dhC2c5/btq3q7ikU19/pUTdRHK4flKsSXKoiTA591/img.jpg",
    "https://t1.daumcdn.net/cfile/tistory/2408E23B583C9DFB30",
    "https://img.chuing.net/i/QNeyGHe/%EB%B0%B0%EA%B2%BD%206.jpg",
    // "1.jpg",
    // "2.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // createElement()로 태그 생성
// bgImage.src = `img/${chosenImage}`; // 태그에 속성 추가
bgImage.src = `${chosenImage}`; // 태그에 속성 추가
bgImage.id = "bgImg";
document.body.appendChild(bgImage); // html에 태그 추가
