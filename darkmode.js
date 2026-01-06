const html = document.querySelector("html");
const btn = document.querySelector("#changeBtn");

if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
}

btn.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
