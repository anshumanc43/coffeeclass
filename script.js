const menu = document.querySelector(".menu");
const nav = document.querySelector(".desktop-nav");
menu?.addEventListener("click", () => {
  const open = nav.style.display === "flex";
  nav.style.display = open ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "78px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "20px";
  nav.style.background = "#1d160f";
  nav.style.flexDirection = "column";
  nav.style.alignItems = "center";
});
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 1000 && nav) nav.style.display = "";
  });
});