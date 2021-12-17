const humburgerNav = document.querySelector(".humburger");

function responsiveNav() {
  const linksList = document.querySelector(".nav-links");

  console.log("s");
  linksList.classList.toggle("responsive");
}

humburgerNav.addEventListener("click", responsiveNav);
