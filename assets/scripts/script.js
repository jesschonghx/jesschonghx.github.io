// For animation on scroll
AOS.init({
  offset: 200, // Adjust this value to tweak when animations start
  once: true, // Run animations only once
});

// Wait for document to load
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll to projects
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  // Disable image drag effect
  window.ondragstart = function () {
    return false;
  };
}); // DOMContentLoaded end
