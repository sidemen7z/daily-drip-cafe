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
      if (vids[0] && vids[0].url && hv0) {
        hv0.querySelector("source").src = vids[0].url;
        if (vids[0].poster) hv0.poster = vids[0].poster;
        hv0.load();
      }
      if (vids[1] && vids[1].url && hv1) {
        hv1.querySelector("source").src = vids[1].url;
        if (vids[1].poster) hv1.poster = vids[1].poster;
        hv1.load();
      }
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
      if (v.image) { var im = document.getElementById("offerImg"); im.src = v.image; im.hidden = false; }
      var modal = document.getElementById("offerModal");
      setTimeout(function () { modal.hidden = false; }, 2500);
      document.getElementById("offerClose").onclick = function () {
        modal.hidden = true; sessionStorage.setItem("dd_offer_seen", "1");
      };
      modal.addEventListener("click", function (e) {
        if (e.target === modal) { modal.hidden = true; sessionStorage.setItem("dd_offer_seen", "1"); }
      });
    } catch (e) { /* no popup */ }
  });
})();
