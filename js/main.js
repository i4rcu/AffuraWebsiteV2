/* Affura Plast — slider, reveal-on-scroll, mobile nav */
(function () {
  "use strict";

  /* ---- mobile nav ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---- reveal on scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- product gallery (detail pages) ---- */
  var galMain = document.querySelector(".gallery-main img");
  if (galMain) {
    document.querySelectorAll(".gallery-thumbs button").forEach(function (b) {
      b.addEventListener("click", function () {
        galMain.src = b.querySelector("img").getAttribute("src");
        document.querySelectorAll(".gallery-thumbs button").forEach(function (x) { x.classList.remove("active"); });
        b.classList.add("active");
      });
    });
  }

  /* ---- hero slider (each slide standalone, per the manager's spec) ---- */
  var hero = document.querySelector(".hero");
  if (!hero) return;
  var slides = hero.querySelectorAll(".slide");
  var dotsBox = hero.querySelector(".slider-dots");
  var current = 0, timer;
  var REG_MARK = '<svg class="regmark" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="4.6"/><line x1="7" y1="0" x2="7" y2="14"/><line x1="0" y1="7" x2="14" y2="7"/></svg>';

  slides.forEach(function (_, i) {
    var b = document.createElement("button");
    b.innerHTML = REG_MARK;
    b.setAttribute("role", "tab");
    b.setAttribute("aria-label", "Slide " + (i + 1));
    b.addEventListener("click", function () { go(i); restart(); });
    dotsBox.appendChild(b);
  });
  var dots = dotsBox.querySelectorAll("button");

  function go(i) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (i + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
    hero.classList.toggle("on-light", slides[current].classList.contains("light"));
  }
  function next() { go(current + 1); }
  function restart() {
    clearInterval(timer);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timer = setInterval(next, 6500);
    }
  }

  hero.querySelector(".slider-arrow.next").addEventListener("click", function () { next(); restart(); });
  hero.querySelector(".slider-arrow.prev").addEventListener("click", function () { go(current - 1); restart(); });
  hero.addEventListener("mouseenter", function () { clearInterval(timer); });
  hero.addEventListener("mouseleave", restart);

  /* touch swipe (mirrored in RTL) */
  var touchX = null;
  hero.addEventListener("touchstart", function (e) {
    touchX = e.touches[0].clientX;
    clearInterval(timer);
  }, { passive: true });
  hero.addEventListener("touchend", function (e) {
    if (touchX === null) { restart(); return; }
    var dx = e.changedTouches[0].clientX - touchX;
    var rtl = document.documentElement.dir === "rtl";
    if (Math.abs(dx) > 45) {
      if ((dx < 0) !== rtl) next(); else go(current - 1);
    }
    touchX = null;
    restart();
  }, { passive: true });

  go(0);
  restart();
})();
