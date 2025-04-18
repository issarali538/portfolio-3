let latest = document.getElementById("latest");

latest.addEventListener("click", function () {
  console.log(this.classList.toggle("hidden"));
});

let mobileMenu = document.getElementById("mobile-menu");
let menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", function () {
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("flex");
});

// mobile menu cancel btn
let cancel = document.getElementById("cancel");
cancel.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
