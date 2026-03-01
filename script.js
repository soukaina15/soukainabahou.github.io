const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

document.querySelectorAll(".menu a").forEach(a => {
  a.addEventListener("click", () => menu.classList.remove("open"));
});

function sendMail(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Portfolio - Message de ${name}`);
  const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  window.location.href = `mailto:soukaina@email.com?subject=${subject}&body=${body}`;
  return false;
}
