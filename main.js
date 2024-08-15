function menuMobile() {
  let mobileMenu = document.querySelector(".nav-containerMobile");
  if (mobileMenu.classList.contains("open")) {
    mobileMenu.classList.remove("open");
  } else {
    mobileMenu.classList.add("open");
  }
}
