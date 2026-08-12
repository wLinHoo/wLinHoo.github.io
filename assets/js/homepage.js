(function () {
  "use strict";

  var home = document.querySelector(".research-home");
  if (!home) return;

  var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var sections = Array.prototype.slice.call(home.querySelectorAll(".home-section"));

  if (!reducedMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("motion-ready");
    sections.forEach(function (section) {
      section.classList.add("reveal-section");
    });

    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });

    sections.forEach(function (section) {
      revealObserver.observe(section);
    });
  }

  var nav = document.getElementById("site-nav");
  if (!nav) return;

  function allNavLinks() {
    return Array.prototype.slice.call(nav.querySelectorAll('a[href*="#"]'));
  }

  function setActive(hash) {
    allNavLinks().forEach(function (link) {
      var linkHash;
      try {
        linkHash = new URL(link.href, window.location.href).hash;
      } catch (error) {
        linkHash = link.getAttribute("href");
      }

      if (linkHash === hash) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  var targets = allNavLinks().map(function (link) {
    var hash = new URL(link.href, window.location.href).hash;
    return hash ? document.querySelector(hash) : null;
  }).filter(function (target, index, list) {
    return target && list.indexOf(target) === index;
  });

  if ("IntersectionObserver" in window && targets.length) {
    var visibleSections = new Map();
    var navigationObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          visibleSections.set(entry.target.id, entry.boundingClientRect.top);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });

      if (!visibleSections.size) return;
      var activeId = Array.from(visibleSections.entries()).sort(function (a, b) {
        return Math.abs(a[1]) - Math.abs(b[1]);
      })[0][0];
      setActive("#" + activeId);
    }, { rootMargin: "-18% 0px -68% 0px", threshold: 0 });

    targets.forEach(function (target) {
      navigationObserver.observe(target);
    });
  }

  setActive(window.location.hash || "#about-me");

  var menuButton = nav.querySelector("button[aria-controls='site-nav-hidden']");
  if (menuButton) {
    var menu = document.getElementById("site-nav-hidden");
    var syncMenuState = function () {
      var expanded = menu && !menu.classList.contains("hidden");
      menuButton.setAttribute("aria-expanded", String(Boolean(expanded)));
    };

    if (menu && "MutationObserver" in window) {
      new MutationObserver(syncMenuState).observe(menu, { attributes: true, attributeFilter: ["class"] });
    }
    window.addEventListener("resize", syncMenuState);
    syncMenuState();
  }
})();
