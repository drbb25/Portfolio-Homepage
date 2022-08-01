const pageBlack = document.querySelector(".black_moon");
const pageBody = document.querySelector("body");
const pageA = document.querySelector("a");

pageBlack.addEventListener("click", () => {
  pageBody.classList.toggle("active");
  pageA.classList.toggle("active");
});
