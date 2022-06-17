const btn = document.querySelector(".cd__Btn");
const cd = document.querySelector(".cd");

let deg = 0;

function rotate() {
    deg += 90;

    if (deg > 270) {
        deg = 0;
    }

    cd.style.transform = `rotate(${deg}deg)`;
}

btn.addEventListener("click", rotate);
