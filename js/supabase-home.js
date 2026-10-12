// Homepage live-config: Supabase site_settings (hero films, content, popup).
// Falls back silently to the hardcoded HTML if offline / not configured.
(function () {
  var URL = (window.DAILY_DRIP_SUPABASE || {}).url;
  var KEY = (window.DAILY_DRIP_SUPABASE || {}).anonKey;
  if (!URL || !KEY || !window.supabase) return;
  var sb = window.supabase.createClient(URL, KEY);

  // 1) Hero films
  sb.from("site_settings").select("value").eq("key", "hero").single().then(function (res) {
    var v = (res.data || {}).value;
    if (!v) return;
    try {
      var vids = v.videos || [];
      var hv0 = document.getElementById("hv0"), hv1 = document.getElementById("hv1");
      function swapVideo(el, item) {
        if (!el || !item || !item.url) return;
        var src = el.querySelector("source");
        // Skip if the cloud URL matches what's already loading — avoids
        // re-downloading and restarting the hero film (page-load jank).
        if (src && src.getAttribute("src") === item.url) return;
        if (src) src.src = item.url;
        if (item.poster) el.poster = item.poster;
        el.load();
        if (el.classList.contains("active")) { el.play && el.play().catch(function () {}); }
      }
      if (vids[0]) swapVideo(hv0, vids[0]);
      if (vids[1]) swapVideo(hv1, vids[1]);
    } catch (e) { /* keep local fallback */ }
  });

  // 2) Headline + story text
  sb.from("site_settings").select("value").eq("key", "content").single().then(function (res) {
    var v = (res.data || {}).value;
    if (!v) return;
    try {
      if (v.eyebrow) document.getElementById("heroEyebrow").textContent = v.eyebrow;
      if (v.title_a || v.title_b || v.accent) {
        document.getElementById("heroTitle").innerHTML =
          (v.title_a || "More Than") + "<br>" + (v.title_b || "Just") + " <em>" + (v.accent || "Coffee") + "</em>";
      }
      if (v.script) document.getElementById("heroScript").innerHTML = v.script;
      if (v.story) document.getElementById("storyPara").textContent = v.story;
    } catch (e) { /* keep defaults */ }
  });

  // 3) Offer popup (once per session)
  sb.from("site_settings").select("value").eq("key", "popup").single().then(function (res) {
    var v = (res.data || {}).value;
    if (!v || !v.active) return;
    try {
      if (sessionStorage.getItem("dd_offer_seen")) return;
      document.getElementById("offerBadge").textContent = v.badge || "";
      document.getElementById("offerTitle").textContent = v.title || "";
      document.getElementById("offerMsg").textContent = v.message || "";
      var cta = document.getElementById("offerCta");
      cta.textContent = v.cta_text || "View Menu";
      cta.href = v.cta_url || "menu.html";
      var card = document.getElementById("offerCard");
      if (v.image) {
        document.getElementById("offerImg").src = v.image;
        document.getElementById("offerMedia").hidden = false;
        card.classList.remove("noimg");
      } else {
        document.getElementById("offerMedia").hidden = true;
        card.classList.add("noimg");
      }
      var modal = document.getElementById("offerModal");
      setTimeout(function () { modal.hidden = false; }, 2500);
      function dismiss() { modal.hidden = true; sessionStorage.setItem("dd_offer_seen", "1"); }
      document.getElementById("offerClose").onclick = dismiss;
      document.getElementById("offerNo").onclick = dismiss;
      modal.addEventListener("click", function (e) {
        if (e.target === modal) { modal.hidden = true; sessionStorage.setItem("dd_offer_seen", "1"); }
      });
    } catch (e) { /* no popup */ }
  });
})();
