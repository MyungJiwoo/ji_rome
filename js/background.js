const images = ["0.png", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // createElement()로 태그 생성
bgImage.src = `img/${chosenImage}`; // 태그에 속성 추가
bgImage.id = "bgImg";
document.body.appendChild(bgImage); // html에 태그 추가
