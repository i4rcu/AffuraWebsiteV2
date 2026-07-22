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

  /* ---- selected category card (deep links from products page) ---- */
  function focusCategoryCard() {
    if (!window.location.hash) return;
    var id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); }
    catch (e) { return; }
    var target = document.getElementById(id);
    if (!target || !target.classList.contains("category-card")) return;

    document.querySelectorAll(".category-card.is-targeted").forEach(function (card) {
      card.classList.remove("is-targeted");
    });
    target.classList.add("is-targeted");

    window.setTimeout(function () {
      var root = document.documentElement;
      var previousBehavior = root.style.scrollBehavior;
      var rect = target.getBoundingClientRect();
      var top = window.scrollY + rect.top - Math.max(0, (window.innerHeight - rect.height) / 2);
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, Math.max(0, top));
      try { target.focus({ preventScroll: true }); }
      catch (e) { target.focus(); }
      window.requestAnimationFrame(function () { root.style.scrollBehavior = previousBehavior; });
    }, 80);
  }

  focusCategoryCard();
  window.addEventListener("hashchange", focusCategoryCard);

  /* ---- category-card image rotation (catalog page) ---- */
  var categoryCards = document.querySelectorAll(".category-card[id]");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (categoryCards.length && !reduceMotion) {
    var categoryObserver = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var controls = entry.target._imageRotation;
        if (!controls) return;
        if (entry.isIntersecting) controls.start();
        else controls.stop();
      });
    }, { rootMargin: "120px 0px", threshold: 0.05 }) : null;

    categoryCards.forEach(function (card, index) {
      var image = card.querySelector(".card-media img");
      if (!image) return;

      var sources = [image.getAttribute("src"), "assets/img/gallery-" + card.id + "-02.png?v=2"];
      var current = 0;
      var intervalId = null;
      var startId = null;
      var paused = false;

      function rotate() {
        var next = (current + 1) % sources.length;
        var loader = new Image();
        loader.onload = function () {
          image.classList.add("is-changing");
          window.setTimeout(function () {
            image.src = sources[next];
            current = next;
            window.requestAnimationFrame(function () { image.classList.remove("is-changing"); });
          }, 220);
        };
        loader.onerror = stop;
        loader.src = sources[next];
      }

      function start() {
        if (paused || intervalId || startId) return;
        startId = window.setTimeout(function () {
          startId = null;
          rotate();
          intervalId = window.setInterval(rotate, 5000);
        }, 5000 + (index % 4) * 180);
      }

      function stop() {
        window.clearTimeout(startId);
        window.clearInterval(intervalId);
        startId = null;
        intervalId = null;
      }

      card._imageRotation = { start: start, stop: stop };
      card.addEventListener("mouseenter", function () { paused = true; stop(); });
      card.addEventListener("mouseleave", function () { paused = false; start(); });
      card.addEventListener("focusin", function () { paused = true; stop(); });
      card.addEventListener("focusout", function () { paused = false; start(); });

      if (categoryObserver) categoryObserver.observe(card);
      else start();
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
