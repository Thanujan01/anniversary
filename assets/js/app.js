/* ============================================================
   APP — shared engine for every page
   Classic script (no modules) so it works straight from file://
   ============================================================ */
(function () {
  "use strict";

  var PAGES = [
    { f: "index.html",     i: "\u{1F3E0}", n: "Home" },
    { f: "timeline.html",  i: "\u{1F5D3}️", n: "Our Story" },
    { f: "albums.html",    i: "\u{1F4F8}", n: "Albums" },
    { f: "memories.html",  i: "\u{1F9E0}", n: "Memories" },
    { f: "surprises.html", i: "\u{1F381}", n: "Surprises" },
    { f: "letters.html",   i: "\u{1F48C}", n: "Letters" }
  ];

  var A = (window.A = {});
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- helpers ---------------- */
  A.el = function (tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };
  A.$ = function (s, r) { return (r || document).querySelector(s); };
  A.$$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  A.pad = function (n) { return n < 10 ? "0" + n : "" + n; };

  A.fmtDate = function (iso) {
    var M = ["January","February","March","April","May","June","July",
             "August","September","October","November","December"];
    var p = iso.split("-");
    return parseInt(p[2], 10) + " " + M[parseInt(p[1], 10) - 1] + " " + p[0];
  };
  A.shortDate = function (iso) {
    var M = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var p = iso.split("-");
    return parseInt(p[2], 10) + " " + M[parseInt(p[1], 10) - 1] + " " + p[0];
  };
  A.daysSince = function (iso) {
    var s = new Date(iso + "T00:00:00");
    return Math.floor((Date.now() - s.getTime()) / 86400000);
  };
  /* How far a date sits from day one — "Day 1", "Day 364",
     or, for the handful of things that happened before she said yes,
     how many days early it was. */
  A.dayNo = function (iso) {
    var s = new Date(CONFIG.start + "T00:00:00");
    var d = new Date(iso + "T00:00:00");
    return Math.round((d - s) / 86400000) + 1;
  };
  /* Counts ELAPSED days, so this always agrees with the "days together"
     stat on the home page and with the numbers written into the letter. */
  A.daysLabel = function (iso) {
    var n = A.dayNo(iso) - 1;
    if (n === 0) return "Day one";
    if (n < 0) return (-n) + " day" + (n === -1 ? "" : "s") + " before day one";
    return n.toLocaleString() + " days in";
  };
  A.photo = function (id) {
    for (var i = 0; i < PHOTOS.length; i++) if (PHOTOS[i].id === id) return PHOTOS[i];
    return null;
  };
  A.pick = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };

  /* ---------------- background ---------------- */
  function buildBackground() {
    var bg = A.el("div", "bg-layer");
    bg.innerHTML = '<div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div>';
    document.body.appendChild(bg);

    var stars = A.el("div", "stars");
    var n = window.innerWidth < 700 ? 42 : 90;
    for (var i = 0; i < n; i++) {
      var s = A.el("i", "star");
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.setProperty("--dur", (2.5 + Math.random() * 5).toFixed(1) + "s");
      s.style.animationDelay = (Math.random() * 5).toFixed(1) + "s";
      if (Math.random() > .8) { s.style.width = "3px"; s.style.height = "3px"; }
      stars.appendChild(s);
    }
    document.body.appendChild(stars);
    document.body.appendChild(A.el("div", "", "")).id = "floaties";
  }

  /* ---------------- floating emojis ---------------- */
  var FLOAT = ["❤️","\u{1F495}","\u{1F496}","\u{1F49E}","✨","\u{1F338}","\u{1F49D}","\u{1F31F}","\u{1F49F}"];
  function spawnFloatie() {
    var host = document.getElementById("floaties");
    if (!host || document.hidden || reduced) return;
    var f = A.el("div", "floatie", A.pick(FLOAT));
    f.style.left = Math.random() * 100 + "%";
    f.style.fontSize = (14 + Math.random() * 20).toFixed(0) + "px";
    f.style.setProperty("--d", (11 + Math.random() * 11).toFixed(1) + "s");
    f.style.setProperty("--rot", (Math.random() * 600 - 300).toFixed(0) + "deg");
    host.appendChild(f);
    setTimeout(function () { f.remove(); }, 23000);
  }

  /* ---------------- nav ---------------- */
  function buildNav() {
    var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (!here) here = "index.html";

    var nav = A.el("nav", "nav");
    var wrap = A.el("div", "wrap");

    var brand = A.el("a", "brand");
    brand.href = "index.html";
    brand.innerHTML = '<span class="ring">\u{1F49E}</span>' + CONFIG.him +
      ' <span class="amp">&amp;</span> ' + CONFIG.her;

    var links = A.el("div", "nav-links");
    links.id = "navLinks";
    PAGES.forEach(function (p) {
      var a = A.el("a", p.f === here ? "active" : "");
      a.href = p.f;
      a.innerHTML = '<span class="ico">' + p.i + "</span>" + p.n;
      links.appendChild(a);
    });

    var tools = A.el("div", "nav-tools");
    var music = A.el("button", "icon-btn", "\u{1F507}");
    music.id = "musicBtn";
    music.title = "Play our little melody";
    music.setAttribute("aria-label", "Toggle music");
    var burger = A.el("button", "icon-btn", "☰");
    burger.id = "navToggle";
    burger.setAttribute("aria-label", "Menu");
    tools.appendChild(music);
    tools.appendChild(burger);

    wrap.appendChild(brand); wrap.appendChild(links); wrap.appendChild(tools);
    nav.appendChild(wrap);
    document.body.insertBefore(nav, document.body.firstChild);

    burger.addEventListener("click", function () {
      links.classList.toggle("open");
      burger.innerHTML = links.classList.contains("open") ? "✕" : "☰";
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) { links.classList.remove("open"); burger.innerHTML = "☰"; }
    });
    window.addEventListener("scroll", function () {
      nav.classList.toggle("scrolled", window.scrollY > 24);
    }, { passive: true });

    music.addEventListener("click", A.toggleMusic);
  }

  /* ---------------- footer ---------------- */
  function buildFooter() {
    if (document.querySelector(".footer")) return;
    var f = A.el("footer", "footer");
    var d = A.daysSince(CONFIG.start);
    f.innerHTML =
      '<div class="wrap">' +
        '<p class="script">Made for you, with every bit of me <span class="heart">❤️</span></p>' +
        "<p>" + CONFIG.him + " &amp; " + CONFIG.her + " — " + d.toLocaleString() +
          " days and counting</p>" +
        "<small>Tap anywhere on a page for a little surprise ✨</small>" +
      "</div>";
    document.body.appendChild(f);
  }

  /* ---------------- toast ---------------- */
  var toastT;
  A.toast = function (msg) {
    var t = document.getElementById("toast");
    if (!t) { t = A.el("div"); t.id = "toast"; document.body.appendChild(t); }
    t.innerHTML = msg;
    t.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(function () { t.classList.remove("show"); }, 3200);
  };

  /* ---------------- click hearts ---------------- */
  function heartBurst(x, y) {
    if (reduced) return;
    var set = ["❤️", "\u{1F495}", "✨", "\u{1F496}"];
    for (var i = 0; i < 6; i++) {
      var b = A.el("div", "burst", set[i % set.length]);
      b.style.left = x + "px"; b.style.top = y + "px";
      var ang = Math.random() * Math.PI * 2, dist = 40 + Math.random() * 70;
      b.style.setProperty("--bx", (Math.cos(ang) * dist).toFixed(0) + "px");
      b.style.setProperty("--by", (Math.sin(ang) * dist - 40).toFixed(0) + "px");
      b.style.fontSize = (12 + Math.random() * 14).toFixed(0) + "px";
      document.body.appendChild(b);
      (function (n) { setTimeout(function () { n.remove(); }, 950); })(b);
    }
  }

  /* ---------------- confetti ---------------- */
  A.confetti = function (count) {
    if (reduced) return;
    count = count || 70;
    var cols = ["#ff4f81", "#ffc96b", "#b58cff", "#5ee0d0", "#fff6f9"];
    for (var i = 0; i < count; i++) {
      (function () {
        var c = A.el("div", "confetti");
        var emoji = Math.random() > .74;
        if (emoji) {
          c.textContent = A.pick(["❤️", "\u{1F389}", "✨", "\u{1F49E}", "\u{1F38A}"]);
          c.style.fontSize = (14 + Math.random() * 14) + "px";
        } else {
          c.style.width = (6 + Math.random() * 7) + "px";
          c.style.height = (9 + Math.random() * 11) + "px";
          c.style.background = A.pick(cols);
        }
        var startX = Math.random() * window.innerWidth;
        c.style.left = startX + "px";
        c.style.top = "-30px";
        document.body.appendChild(c);
        var dur = 2600 + Math.random() * 2600;
        var drift = (Math.random() - .5) * 320;
        var spin = (Math.random() - .5) * 1200;
        var t0 = performance.now();
        (function step(now) {
          var p = (now - t0) / dur;
          if (p >= 1) { c.remove(); return; }
          var y = p * (window.innerHeight + 90);
          var x = Math.sin(p * 7) * 28 + drift * p;
          c.style.transform = "translate(" + x + "px," + y + "px) rotate(" + spin * p + "deg)";
          c.style.opacity = p > .82 ? String(1 - (p - .82) / .18) : "1";
          requestAnimationFrame(step);
        })(t0);
      })();
    }
  };

  /* ---------------- scroll reveal ---------------- */
  A.observe = function (sel, cls) {
    cls = cls || "in";
    var items = A.$$(sel).filter(function (e) { return !e.dataset.obs; });
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (e) { e.classList.add(cls); }); return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var d = parseFloat(en.target.dataset.delay || 0);
        setTimeout(function () { en.target.classList.add(cls); }, d);
        io.unobserve(en.target);
      });
    }, { threshold: .12, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (e) { e.dataset.obs = "1"; io.observe(e); });
  };

  A.staggerKids = function (sel, step) {
    step = step || 70;
    A.$$(sel).forEach(function (parent) {
      Array.prototype.forEach.call(parent.children, function (kid, i) {
        kid.style.transitionDelay = (i * step) + "ms";
      });
    });
  };

  /* ---------------- spotlight cards ---------------- */
  function spotlight() {
    document.addEventListener("mousemove", function (e) {
      var c = e.target.closest ? e.target.closest(".spot") : null;
      if (!c) return;
      var r = c.getBoundingClientRect();
      c.style.setProperty("--mx", (e.clientX - r.left) + "px");
      c.style.setProperty("--my", (e.clientY - r.top) + "px");
    }, { passive: true });
  }

  /* ---------------- countdown ---------------- */
  A.countdown = function (host) {
    if (!host) return;
    var target = new Date(CONFIG.target + "T00:00:00").getTime();
    var units = [["d", "Days"], ["h", "Hours"], ["m", "Minutes"], ["s", "Seconds"]];
    host.innerHTML = "";
    var cells = {};
    units.forEach(function (u) {
      var box = A.el("div", "cd-unit");
      box.innerHTML = '<span class="cd-num">--</span><span class="cd-label">' + u[1] + "</span>";
      host.appendChild(box);
      cells[u[0]] = box.querySelector(".cd-num");
    });

    var last = {};
    function tick() {
      var diff = target - Date.now();
      if (diff <= 0) {
        host.innerHTML = '<div class="cd-unit cd-done"><span class="cd-num gradient-text">\u{1F389}</span>' +
          '<span class="cd-label">Happy ' + CONFIG.years + 'th Anniversary</span></div>';
        if (!host.dataset.fired) { host.dataset.fired = "1"; A.confetti(170); }
        clearInterval(iv);
        return;
      }
      var v = {
        d: Math.floor(diff / 86400000),
        h: Math.floor(diff / 3600000) % 24,
        m: Math.floor(diff / 60000) % 60,
        s: Math.floor(diff / 1000) % 60
      };
      Object.keys(v).forEach(function (k) {
        var txt = k === "d" ? String(v[k]) : A.pad(v[k]);
        if (last[k] !== txt) {
          cells[k].textContent = txt;
          cells[k].classList.remove("tick");
          void cells[k].offsetWidth;
          cells[k].classList.add("tick");
          last[k] = txt;
        }
      });
    }
    tick();
    var iv = setInterval(tick, 1000);
  };

  /* ---------------- count-up numbers ---------------- */
  A.countUp = function (node, to, dur, suffix) {
    dur = dur || 1600;
    suffix = suffix || "";
    var t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      node.textContent = Math.round(to * eased).toLocaleString() + (p === 1 ? suffix : "");
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  };

  /* ---------------- lightbox ---------------- */
  var lbList = [], lbIdx = 0, lbNode = null;
  function buildLightbox() {
    lbNode = A.el("div", "lb");
    lbNode.id = "lightbox";
    lbNode.innerHTML =
      '<div class="lb-count"><span id="lbI">1</span> / <span id="lbN">1</span></div>' +
      '<button class="lb-x" aria-label="Close">✕</button>' +
      '<button class="lb-nav lb-prev" aria-label="Previous">‹</button>' +
      '<button class="lb-nav lb-next" aria-label="Next">›</button>' +
      '<img class="lb-img" id="lbImg" alt="">' +
      '<div class="lb-bar"><h4 id="lbCap"></h4><p id="lbNote"></p></div>';
    document.body.appendChild(lbNode);

    lbNode.querySelector(".lb-x").addEventListener("click", A.closeLb);
    lbNode.querySelector(".lb-prev").addEventListener("click", function (e) { e.stopPropagation(); A.lbStep(-1); });
    lbNode.querySelector(".lb-next").addEventListener("click", function (e) { e.stopPropagation(); A.lbStep(1); });
    lbNode.addEventListener("click", function (e) { if (e.target === lbNode) A.closeLb(); });
    document.addEventListener("keydown", function (e) {
      if (!lbNode.classList.contains("open")) return;
      if (e.key === "Escape") A.closeLb();
      if (e.key === "ArrowLeft") A.lbStep(-1);
      if (e.key === "ArrowRight") A.lbStep(1);
    });
    // swipe
    var sx = 0;
    lbNode.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
    lbNode.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 55) A.lbStep(dx < 0 ? 1 : -1);
    }, { passive: true });
  }

  A.openLb = function (ids, index) {
    lbList = ids; lbIdx = index || 0;
    lbNode.classList.add("open");
    document.body.style.overflow = "hidden";
    A.lbRender();
  };
  A.lbStep = function (dir) {
    lbIdx = (lbIdx + dir + lbList.length) % lbList.length;
    A.lbRender();
  };
  A.lbRender = function () {
    var p = A.photo(lbList[lbIdx]);
    if (!p) return;
    var img = document.getElementById("lbImg");
    img.classList.remove("lb-img"); void img.offsetWidth; img.classList.add("lb-img");
    img.src = "assets/photos/" + p.id + ".jpg";
    img.alt = p.cap;
    document.getElementById("lbCap").textContent = p.cap;
    document.getElementById("lbNote").textContent = A.fmtDate(p.date) + " — " + p.note;
    document.getElementById("lbI").textContent = String(lbIdx + 1);
    document.getElementById("lbN").textContent = String(lbList.length);
  };
  A.closeLb = function () {
    lbNode.classList.remove("open");
    document.body.style.overflow = "";
  };

  /* ---------------- music (WebAudio, no file needed) ---------------- */
  var actx = null, musicOn = false, loopTimer = null;
  // A gentle waltz in C — melody notes as [semitone-from-A4, beats]
  var MELODY = [
    [3, 1], [7, 1], [10, 1], [12, 2], [10, 1],
    [7, 1], [3, 1], [5, 1], [8, 2], [7, 1],
    [3, 1], [7, 1], [12, 1], [15, 2], [14, 1],
    [12, 1], [8, 1], [10, 1], [7, 3]
  ];
  function freq(semi) { return 440 * Math.pow(2, semi / 12); }

  function note(f, t, dur, vol, type) {
    var o = actx.createOscillator(), g = actx.createGain();
    o.type = type || "sine";
    o.frequency.value = f;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.04);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(actx.destination);
    o.start(t); o.stop(t + dur + 0.05);
  }

  function playLoop() {
    if (!musicOn) return;
    var beat = 0.42, t = actx.currentTime + 0.1, total = 0;
    MELODY.forEach(function (n) {
      var d = n[1] * beat;
      note(freq(n[0] - 12), t, d * 1.5, 0.11, "sine");            // melody
      note(freq(n[0] - 24), t, d * 1.8, 0.055, "triangle");        // soft bass
      if (n[1] >= 2) note(freq(n[0] - 5), t + 0.02, d, 0.04, "sine"); // harmony
      t += d; total += d;
    });
    loopTimer = setTimeout(playLoop, (total + 0.9) * 1000);
  }

  A.toggleMusic = function () {
    var btn = document.getElementById("musicBtn");
    if (!musicOn) {
      try {
        if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
        if (actx.state === "suspended") actx.resume();
      } catch (e) { A.toast("Your browser blocked the audio \u{1F622}"); return; }
      musicOn = true;
      btn.innerHTML = "\u{1F3B5}";
      btn.classList.add("on");
      playLoop();
      A.toast("Our little melody \u{1F3B6}");
    } else {
      musicOn = false;
      clearTimeout(loopTimer);
      btn.innerHTML = "\u{1F507}";
      btn.classList.remove("on");
    }
  };

  /* ---------------- favourites (localStorage) ---------------- */
  A.favs = function () {
    try { return JSON.parse(localStorage.getItem("tt_favs") || "[]"); }
    catch (e) { return []; }
  };
  A.toggleFav = function (id) {
    var f = A.favs(), i = f.indexOf(id);
    if (i > -1) f.splice(i, 1); else f.push(id);
    try { localStorage.setItem("tt_favs", JSON.stringify(f)); } catch (e) {}
    return f.indexOf(id) > -1;
  };

  /* ---------------- curtain ---------------- */
  function curtain() {
    var c = A.el("div");
    c.id = "curtain";
    c.innerHTML = '<div><div class="c-heart">\u{1F49E}</div>' +
      '<div class="c-txt">' + CONFIG.him + " &amp; " + CONFIG.her + "</div></div>";
    document.body.appendChild(c);
    window.addEventListener("load", function () {
      setTimeout(function () {
        c.classList.add("gone");
        setTimeout(function () { c.remove(); }, 800);
      }, 420);
    });
    setTimeout(function () { c.classList.add("gone"); }, 3500); // safety net
  }

  /* ---------------- boot ---------------- */
  function boot() {
    // <body data-bare="1"> = no nav / footer / lightbox (the login page)
    var bare = document.body.dataset.bare === "1";

    curtain();
    buildBackground();
    if (!bare) { buildNav(); buildLightbox(); }
    spotlight();

    document.addEventListener("click", function (e) {
      if (e.target.closest("a, button, input, .no-burst")) return;
      heartBurst(e.clientX, e.clientY);
    });

    if (!reduced) {
      for (var i = 0; i < 5; i++) setTimeout(spawnFloatie, i * 900);
      setInterval(spawnFloatie, 2300);
    }

    // run the page's own script
    if (typeof window.initPage === "function") window.initPage();

    if (!bare) buildFooter();
    A.staggerKids(".stagger", 80);
    A.observe(".reveal");
    A.observe(".stagger");
    A.observe(".m-item");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else { boot(); }
})();
