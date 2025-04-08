const showMenuBar = document.querySelector("#showMenuBar");
const hideMenuBar = document.querySelector("#hideMenuBar");
const menuBaar = document.getElementById("menu-bar");


showMenuBar.addEventListener("click", () => {
  menuBaar.style.display = "block";
  menuBaar.classList.add("menu");
  hideMenuBar.style.display = "block";
  showMenuBar.style.display = "none";
});

hideMenuBar.addEventListener("click", () => {
  menuBaar.style.display = "none";
  menuBaar.classList.remove("menu");
  showMenuBar.style.display = "block";
  hideMenuBar.style.display = "none";
})



const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove("hidden");
  } else {
    backToTop.classList.add("hidden");
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
