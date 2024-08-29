document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".menu-items").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const menuItems = document.querySelector(".menu-items");

  // Close mobile toggle
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuItems.classList.remove("active");
    });
  });

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});
