const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

let popupContainer = document.querySelector(".cards-popup");
let popupCards = document.querySelectorAll(".popup");

document.querySelectorAll(".card-container .card").forEach((card) => {
  card.onclick = () => {
    popupContainer.style.display = "flex";
    let name = card.getAttribute("data-name");
    popupCards.forEach((popup) => {
      let target = popup.getAttribute("data-target");
      if (name == target) {
        popup.classList.add("active");
      } else {
        popup.classList.remove("active");
      }
    });
  };
});

popupCards.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    popupContainer.style.display = "none";
  };
});
