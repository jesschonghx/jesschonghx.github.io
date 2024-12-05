// Wait for document to load
document.addEventListener("DOMContentLoaded", () => {
  // Link to pages
  document.getElementById("gongcha-project").onclick = function () {
    window.open(
      "https://www.behance.net/gallery/125676387/OrderCollectBeat-the-crowd-Redesigning-Gong-cha-app",
      "_blank"
    );
  };
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
