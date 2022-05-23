const modal = document.querySelector(".modal");
const modalOpen = document.querySelector(".modal-arrow");

function openTheModal() {
    modal.classList.remove("open");
}

modalOpen.addEventListener("click", openTheModal);
