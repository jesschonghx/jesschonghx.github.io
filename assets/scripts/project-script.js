// For animation on scroll
AOS.init({
  once: true, // Run animations only once
});
// Navigation Pane
FooNav.init({
  classes: "fon-full-height fon-rounded", // Any additional classes to add to FooNav
  items: "body", // The selector where FooNav looks for the header elements
  position: "fon-top-right", // The position in the viewport
  theme: "fon-light", // The theme to use
});

// Wait for document to load
document.addEventListener("DOMContentLoaded", () => {
  // Disable image drag effect
  window.ondragstart = function () {
    return false;
  };
}); // DOMContentLoaded end
