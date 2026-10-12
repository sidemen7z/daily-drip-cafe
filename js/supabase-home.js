// Homepage live-config: Supabase site_settings.hero overrides local <video> sources.
// Falls back silently to the hardcoded src if offline / not configured.
(function () {
  var URL = (window.DAILY_DRIP_SUPABASE || {}).url;
  var KEY = (window.DAILY_DRIP_SUPABASE || {}).anonKey;
  if (!URL || !KEY || !window.supabase) return;
  var sb = window.supabase.createClient(URL, KEY);
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
})();
