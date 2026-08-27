(function () {
  "use strict";

  var home = document.querySelector(".research-home");
  if (!home) return;

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

  function activateLastTargetAtPageEnd() {
    if (!targets.length) return false;

    var pageBottom = window.scrollY + window.innerHeight;
    var documentBottom = document.documentElement.scrollHeight;
    if (pageBottom < documentBottom - 2) return false;

    setActive("#" + targets[targets.length - 1].id);
    return true;
  }

  nav.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest('a[href*="#"]');
    if (!link || !nav.contains(link)) return;

    var hash = new URL(link.href, window.location.href).hash;
    if (hash) setActive(hash);
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

      if (activateLastTargetAtPageEnd()) return;
      if (!visibleSections.size) return;
      var activeId = Array.from(visibleSections.entries()).sort(function (a, b) {
        return Math.abs(a[1]) - Math.abs(b[1]);
      })[0][0];
      setActive("#" + activeId);
    }, { rootMargin: "-18% 0px -68% 0px", threshold: 0 });

    targets.forEach(function (target) {
      navigationObserver.observe(target);
    });

    var scrollUpdatePending = false;
    window.addEventListener("scroll", function () {
      if (scrollUpdatePending) return;
      scrollUpdatePending = true;

      window.requestAnimationFrame(function () {
        activateLastTargetAtPageEnd();
        scrollUpdatePending = false;
      });
    }, { passive: true });
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
