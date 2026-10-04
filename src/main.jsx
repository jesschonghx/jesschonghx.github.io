import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { pages, workshopGate } from "./pageContent";
import "./index.css";

const projectLinks = {
  "gongcha-project":
    "https://www.behance.net/gallery/125676387/OrderCollectBeat-the-crowd-Redesigning-Gong-cha-app",
  "nhg-project": "nhg.html",
  "capitalview-project": "capitalview.html",
  "design-project": "nexus.html",
  "workshop-project": "workshop.html",
};

const WORKSHOP_STORAGE_KEY = "workshopUnlocked";
const WORKSHOP_PASSWORD = atob("U3VuZmxvd2Vy");

function isWorkshopUnlocked() {
  try {
    return sessionStorage.getItem(WORKSHOP_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function loadScript(src) {
  const existingScript = document.querySelector(`script[src="${src}"]`);
  if (existingScript) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

function loadStylesheet(href) {
  const existingStylesheet = document.querySelector(`link[href="${href}"]`);
  if (existingStylesheet) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });
}

function getPageKey() {
  const page = window.location.pathname.split("/").pop();

  if (page === "capitalview.html") return "capitalview";
  if (page === "nhg.html") return "nhg";
  if (page === "nexus.html") return "nexus";
  if (page === "workshop.html") return "workshop";

  return "home";
}

async function initPagePlugins(pageKey) {
  await loadScript("assets/scripts/aos.js");
  window.AOS?.init?.({ once: true });

  if (pageKey !== "home") {
    await loadStylesheet("assets/foonav.min.css");
    await loadScript("assets/scripts/foonav.min.js");
    document.querySelectorAll(".fon-nav").forEach((element) => element.remove());
    window.FooNav?.init?.({
      classes: "fon-full-height fon-rounded",
      items: { container: "body", exclude: ".project-title-bottom" },
      position: "fon-top-right",
      theme: "fon-light",
    });
  }
}

function App() {
  const pageKey = useMemo(getPageKey, []);
  const [workshopUnlocked, setWorkshopUnlocked] = useState(isWorkshopUnlocked);
  const workshopLocked = pageKey === "workshop" && !workshopUnlocked;
  const html = workshopLocked
    ? workshopGate
    : pages[pageKey] ?? pages.home;

  useEffect(() => {
    const handleClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (anchor) {
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      }

      const project = event.target.closest("[id]");
      if (project && projectLinks[project.id]) {
        if (project.id === "gongcha-project") {
          window.open(projectLinks[project.id], "_blank", "noopener,noreferrer");
        } else {
          window.location.href = projectLinks[project.id];
        }
      }
    };

    window.ondragstart = () => false;
    document.addEventListener("click", handleClick);

    if (!workshopLocked) {
      initPagePlugins(pageKey).catch((error) => {
        console.error("Unable to initialize page plugins", error);
      });
    }

    return () => {
      document.removeEventListener("click", handleClick);
      window.ondragstart = null;
    };
  }, [pageKey, workshopLocked]);

  useEffect(() => {
    if (!workshopLocked) return;

    const form = document.getElementById("workshop-gate-form");
    if (!form) return;

    const input = document.getElementById("workshop-gate-input");
    const error = document.getElementById("workshop-gate-error");
    input?.focus();

    const handleSubmit = (event) => {
      event.preventDefault();

      if (input?.value === WORKSHOP_PASSWORD) {
        try {
          sessionStorage.setItem(WORKSHOP_STORAGE_KEY, "1");
        } catch {}
        setWorkshopUnlocked(true);
      } else {
        if (error) error.hidden = false;
        if (input) {
          input.value = "";
          input.focus();
        }
      }
    };

    form.addEventListener("submit", handleSubmit);
    return () => form.removeEventListener("submit", handleSubmit);
  }, [workshopLocked]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

createRoot(document.getElementById("root")).render(<App />);
