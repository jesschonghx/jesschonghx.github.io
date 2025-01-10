// For animation on scroll
AOS.init({
  once: true, // Run animations only once
});
// Navigation Pane
FooNav.init({
  classes: "fon-full-height fon-rounded fon-shadow", // Any additional classes to add to FooNav
  items: "body", // The selector where FooNav looks for the header elements
  position: "fon-top-right", // The position in the viewport
  theme: "fon-light", // The theme to use
});

// Wait for document to load
document.addEventListener("DOMContentLoaded", () => {
  const headerHeight = document.querySelector(".navbar").offsetHeight; // Sticky header height

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Temporarily disable animations
        targetElement.classList.remove("aos-animate");

        const offset =
          targetElement.getBoundingClientRect().top +
          window.scrollY -
          headerHeight;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });

        // Re-enable animations after a slight delay
        setTimeout(() => {
          targetElement.classList.add("aos-animate");
        }, 1000);
      }
    });
  });
  // Disable image drag effect
  window.ondragstart = function () {
    return false;
  };
}); // DOMContentLoaded end
