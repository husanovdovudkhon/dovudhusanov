
window.addEventListener("DOMContentLoaded", () => {
  // Loader
  let loader = document.querySelector(".loader");
  let navLinks = document.querySelector(".nav-links")
  let btnBurger = document.querySelector(".burger")
  let links = document.querySelectorAll(".nav-links li a")

  setTimeout(() => {
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2000);

  // Scroll
  window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
    navLinks.classList.toggle("active-nav", window.scrollY > 0)
  });

  btnBurger.addEventListener("click", () => {
    btnBurger.classList.toggle("active")
    navLinks.classList.toggle("active")
  })

  links.forEach(link => {
    link.addEventListener("click", () => {
      if(navLinks.classList.contains("active")) {
        navLinks.classList.remove("active")
        btnBurger.classList.remove("active")
      }
    })
  })

  const scrollBtn = document.querySelector('.scrollToTop-btn')
    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('active', window.scrollY > 350)
    })
    scrollBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })


})