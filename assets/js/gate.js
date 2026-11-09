/* ============================================================
   GATE — every page except login.html checks this first.
   Loaded in <head> so the redirect happens before anything paints.

   This is a romantic lock, not a security system: the answers
   live in the page source. It is here to make her earn the door.
   ============================================================ */
(function () {
  "use strict";

  var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (here === "login.html") return;

  var unlocked = false;
  try {
    unlocked = sessionStorage.getItem("tt_unlocked") === "yes";
  } catch (e) {
    // storage blocked (private mode, file:// on some browsers) —
    // let her in rather than lock her out of her own anniversary
    return;
  }

  if (!unlocked) location.replace("login.html");
})();
