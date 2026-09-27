const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("#main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

const form = document.querySelector("#contactForm");
const message = document.querySelector("#formMessage");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const request = document.querySelector("#message").value.trim();

  if (!name || !email || !request) {
    message.textContent = "Vyplňte prosím jméno, e-mail a zprávu.";
    return;
  }

  // Static GitHub Pages version:
  // open the visitor's email client instead of requiring a backend.
  const subject = encodeURIComponent(`Poptávka servisu od ${name}`);
  const body = encodeURIComponent(
    `Jméno: ${name}\nE-mail: ${email}\nTelefon: ${phone || "neuveden"}\n\nPoptávka:\n${request}`
  );

  window.location.href =
    `mailto:mobilnipneuservis63@gmail.com?subject=${subject}&body=${body}`;

  message.textContent = "Otevírám váš e-mailový program…";
});
