// SELECT ITEMS
const navToggle = document.querySelector(".nav-toggle");
const category = document.querySelector(".category-box");

navToggle.addEventListener("click", function () {
  category.classList.toggle("show-link");
});

//fixed navbar
const navbar = document.getElementById("nav");
const toplink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  // console.log(navHeight);
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 600) {
    toplink.classList.add("show-link2");
  } else {
    toplink.classList.remove("show-link2");
  }
});
