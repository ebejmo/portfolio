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

document.addEventListener("DOMContentLoaded", () => {
  const mailIcon = document.getElementById("mail-icon");
  const popup = document.querySelector(".mails-popup");
  let pp = document.querySelector(".mail-popup");
  const closeIcon = document.querySelector(".fa-times");
  const emailForm = document.getElementById("email-form");

  mailIcon.addEventListener("click", () => {
    popup.style.display = "flex";
    pp.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeIcon.addEventListener("click", () => {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
    closeIcon.classList.remove("active");
  });

  emailForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send email using the specified email address
    const mailtoLink = `mailto:bejmoemil@gmail.com?subject=Contact%20&body=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(
      email
    )}%0AMessage:%20${encodeURIComponent(message)}`;

    // Open user's email client with the composed email
    window.location.href = mailtoLink;
  });
});
