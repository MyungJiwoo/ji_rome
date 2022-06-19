const images = [
    "https://i.pinimg.com/236x/c1/f8/c7/c1f8c7b0084f4c1231e740708c65be65.jpg",
    "https://i.pinimg.com/236x/0b/d7/1f/0bd71fe9320173a8d378ba4ae1fcf3fb.jpg",
    "https://i.pinimg.com/236x/d7/f3/35/d7f3354ba4a6794ca26363e510cb46b2.jpg",
    "https://i.pinimg.com/236x/25/a8/d2/25a8d281f903d34084abedd24da870e0.jpg",
    "https://i.pinimg.com/236x/d3/61/ff/d361ffb7941c17a5fc5c54de5b9a676c.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // createElement()로 태그 생성
// bgImage.src = `img/${chosenImage}`; // 태그에 속성 추가
bgImage.src = `${chosenImage}`; // 태그에 속성 추가
bgImage.id = "bgImg";
document.body.appendChild(bgImage); // html에 태그 추가
