// For animation on scroll
AOS.init({
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

// Gongcha Behance link
document.getElementById("gongcha-project").onclick = function () {
  window.open(
    "https://www.behance.net/gallery/125676387/OrderCollectBeat-the-crowd-Redesigning-Gong-cha-app",
    "_blank"
  );
};
// NHG Project link
document.getElementById("nhg-project").onclick = function () {
  window.location.href = "nhg.html";
};
// Capitalview Project link
document.getElementById("capitalview-project").onclick = function () {
  window.location.href = "capitalview.html";
};
// Capitalview Project link
document.getElementById("design-project").onclick = function () {
  window.location.href = "nexus.html";
};
