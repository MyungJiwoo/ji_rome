const modal = document.querySelector(".modal");
const checklist = document.querySelector(".checklist");
let open = false;

function openTheModal() {
    if (!open) {
        modal.classList.remove("open");
        modal.style.transition =
            "all 0.8s cubic-bezier(0.705, 0.345, 0.180, 0.970)";
        open = true;
    } else if (open) {
        modal.classList.add("open");
        open = false;
    }
}

checklist.addEventListener("click", openTheModal);
// document.addEventListener("click", openTheModal);

// function openTheModal() {
//     modal.classList.remove("open");
//     console.log("열림");
// }

// function closeTheModal() {
//     modal.classList.add("open");
// }

// modalOpen.addEventListener("click", openTheModal);

// function controlTheModal() {
//     if (check) {
//         modalOpen.addEventListener("click", openTheModal);
//         check = true;
//     } else {
//         modalOpen.addEventListener("click", closeTheModal);
//     }
// }
