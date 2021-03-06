const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener('click', function () {
        const video_id = card.getAttribute("id");
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${video_id}`;
        modalOverlay.classList.add('active');
    });
}

document.querySelector(".close-modal").addEventListener('click', function () {
    modalOverlay.classList.remove("active");
});