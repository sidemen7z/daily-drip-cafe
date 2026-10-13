// Daily Drip — live CMS bindings. Every block is optional: if Supabase is
// unreachable or a key is empty, the hardcoded HTML stays untouched.
(function () {
  var CFG = window.DAILY_DRIP_SUPABASE || {};
  if (!CFG.url || !CFG.anonKey || !window.supabase) return;
  var sb = window.supabase.createClient(CFG.url, CFG.anonKey);
  function get(key) {
    return sb.from("site_settings").select("value").eq("key", key).maybeSingle().then(function (res) {
      return (res.data || {}).value || null;
    }, function () { return null; });
  }
  function setText(id, v) {
    if (v == null || v === "") return;
    var el = document.getElementById(id);
    if (el) el.textContent = v;
  }
  function setHTML(id, v) {
    if (v == null || v === "") return;
    var el = document.getElementById(id);
    if (el) el.innerHTML = v;
  }

  // 1) Hero films (existing behaviour)
  get("hero").then(function (v) {
    if (!v) return;
    try {
      var vids = v.videos || [];
      function swap(id, item) {
        var el = document.getElementById(id);
        if (!el || !item || !item.url) return;
        var src = el.querySelector("source");
        if (src && src.getAttribute("src") === item.url) return;
        if (src) src.src = item.url;
        if (item.poster) el.poster = item.poster;
        if (el.load) el.load();
        if (el.classList.contains("active") && el.play) el.play().catch(function () {});
      }
      if (vids[0]) swap("hv0", vids[0]);
      if (vids[1]) swap("hv1", vids[1]);
    } catch (e) {}
  });

  // 2) Headline + hero tagline (existing keys)
  get("content").then(function (v) {
    if (!v) return;
    try {
      if (v.eyebrow) setText("heroEyebrow", v.eyebrow);
      if (v.title_a || v.title_b || v.accent) {
        setHTML("heroTitle", (v.title_a || "More Than") + "<br>" + (v.title_b || "Just") + " <em>" + (v.accent || "Coffee") + "</em>");
      }
      if (v.script) setHTML("heroScript", v.script);
    } catch (e) {}
  });

  // 3) Website: nav, Reserve CTA, WhatsApp + phone + email
  get("website").then(function (v) {
    if (!v) return;
    try {
      if (v.nav && v.nav.length) {
        var html = v.nav.map(function (n, i) {
          return '<a href="' + n[1] + '"' + (i === 0 ? ' class="on"' : "") + ">" + n[0] + "</a>";
        }).join("");
        var nav = document.getElementById("siteNav");
        if (nav) nav.innerHTML = html;
        var mnav = document.getElementById("mnavLinks");
        if (mnav) mnav.innerHTML = v.nav.map(function (n) { return '<a href="' + n[1] + '">' + n[0] + "</a>"; }).join("");
      }
      var digits = (v.whatsapp || "").replace(/\D/g, "");
      if (v.reserve_text) {
        ["reserveBtn", "mReserve"].forEach(function (id) {
          var el = document.getElementById(id);
          if (el) el.textContent = v.reserve_text;
        });
      }
      if (v.reserve_url) {
        ["reserveBtn", "mReserve"].forEach(function (id) {
          var el = document.getElementById(id);
          if (el) el.href = v.reserve_url;
        });
      }
      if (digits) {
        document.querySelectorAll('a[href*="wa.me/"]').forEach(function (a) {
          var href = a.getAttribute("href");
          a.setAttribute("href", href.replace(/wa\.me\/\d+/, "wa.me/" + digits));
        });
      }
      if (v.phone) {
        document.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
          a.setAttribute("href", "tel:+" + v.phone.replace(/\D/g, ""));
        });
        setText("visitPhoneInline", v.phone);
        setText("footPhoneInline", v.phone);
      }
      if (v.email) {
        document.querySelectorAll('a[href^="mailto:"]').forEach(function (a) {
          a.setAttribute("href", "mailto:" + v.email);
          a.textContent = v.email;
        });
      }
    } catch (e) {}
  });

  // 4) Homepage: pillars, seasonal band, favourites headings
  get("homepage").then(function (v) {
    if (!v) return;
    try {
      if (v.pillars) {
        v.pillars.slice(0, 4).forEach(function (p, i) {
          setText("pl" + i + "t", p[0]);
          setText("pl" + i + "d", p[1]);
        });
      }
      if (v.season_eyebrow) setText("seasonEyebrow", v.season_eyebrow);
      if (v.season_title) setHTML("seasonTitle", v.season_title);
      if (v.season_sub) setText("seasonSub", v.season_sub);
      var picks = v.season_snap && v.season_snap.length ? v.season_snap : null;
      if (picks) {
        var cards = document.querySelectorAll("#specGrid .spec");
        var wa = "";
        try {
          var m = document.querySelector('a[href*="wa.me/"]');
          wa = m ? m.getAttribute("href").split("?")[0] : "https://wa.me/917738314007";
        } catch (e) { wa = "https://wa.me/917738314007"; }
        picks.slice(0, 4).forEach(function (p, i) {
          var c = cards[i];
          if (!c || !p) return;
          var img = c.querySelector("img");
          if (img && p.img) { img.src = p.img; img.alt = p.name || ""; }
          var b = c.querySelector("b");
          if (b && p.name) b.textContent = p.name;
          var desc = c.querySelector("p");
          if (desc && p.desc) desc.textContent = p.desc.length > 60 ? p.desc.slice(0, 60) + "…" : p.desc;
          var order = c.querySelector("a.spec__order");
          if (order && p.name) order.href = wa + "?text=" + encodeURIComponent("Hi! I want " + p.name);
        });
      }
      if (v.fav_eyebrow) setText("favEyebrow", v.fav_eyebrow);
      if (v.fav_title) setText("favTitle", v.fav_title);
      if (v.fav_sub) setText("favSub", v.fav_sub);
    } catch (e) {}
  });

  // 5) Story (Our Space) — text, film, CTA
  get("story").then(function (v) {
    if (!v) return;
    try {
      if (v.eyebrow) setText("storyEyebrow", v.eyebrow);
      if (v.title) setHTML("storyTitle", v.title.replace(/\n/g, "<br>"));
      var c = null;
      get("content").then(function (cv) {
        var t = (v.text || "") || (cv && cv.story) || "";
        if (t) setText("storyPara", t);
      });
      if (v.video || v.poster) {
        var vid = document.getElementById("spaceVideo");
        if (vid) {
          var src = vid.querySelector("source");
          if (src && v.video) src.src = v.video;
          if (v.poster) vid.poster = v.poster;
          if (vid.load) vid.load();
        }
      }
      if (v.cta1) setText("storyCta1", v.cta1);
      if (v.cta1_url) {
        var cta = document.getElementById("storyCta1");
        if (cta) cta.href = v.cta1_url;
      }
    } catch (e) {}
  });
  // Story paragraph fallback from content key (keeps old behaviour if story key empty)
  get("content").then(function (v) {
    if (v && v.story) {
      get("story").then(function (sv) {
        if (!sv || !sv.text) setText("storyPara", v.story);
      });
    }
  });

  // 6) Gallery
  get("gallery").then(function (v) {
    if (!v) return;
    try {
      if (v.eyebrow) setText("galEyebrow", v.eyebrow);
      if (v.title) setText("galTitle", v.title);
      if (v.sub) setText("galSub", v.sub);
      if (v.frames && v.frames.length) {
        var imgs = document.querySelectorAll("#galGrid img");
        v.frames.slice(0, imgs.length).forEach(function (f, i) {
          if (f.img) { imgs[i].src = f.img; imgs[i].alt = f.alt || ""; imgs[i].setAttribute("onclick", "openLB('" + f.img.replace(/'/g, "") + "')"); }
        });
      }
    } catch (e) {}
  });

  // 7) Locations & contact
  get("locations").then(function (v) {
    if (!v) return;
    try {
      if (v.kicker) setText("visitKicker", v.kicker);
      if (v.title) setHTML("visitTitle", v.title.replace(/\n/g, "<br>"));
      if (v.address) setHTML("visitAddr", v.address.replace(/\n/g, "<br>"));
      if (v.hours) setText("visitHours", v.hours);
      if (v.phone) {
        setText("visitPhoneInline", v.phone);
        document.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
          a.setAttribute("href", "tel:+" + v.phone.replace(/\D/g, ""));
        });
      }
      if (v.rating) setText("visitRating", v.rating);
      if (v.map) {
        var f = document.getElementById("mapFrame");
        if (f) f.src = "https://www.google.com/maps?q=" + encodeURIComponent(v.map) + "&z=17&output=embed";
      }
      if (v.dir_url) {
        var d = document.getElementById("dirBtn");
        if (d) d.href = v.dir_url;
      }
      if (v.wa_url) {
        var w = document.getElementById("waOrderBtn");
        if (w) w.href = v.wa_url;
      }
      if (v.wa_text) setText("waOrderBtn", v.wa_text);
    } catch (e) {}
  });

  // 8) Footer
  get("footer").then(function (v) {
    if (!v) return;
    try {
      if (v.address) setText("footAddr", v.address);
      if (v.phone) {
        setText("footPhoneInline", v.phone);
        document.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
          if (a.textContent.indexOf("77383") !== -1 || a.id === "footPhoneInline") {
            a.setAttribute("href", "tel:+" + v.phone.replace(/\D/g, ""));
          }
        });
      }
      if (v.whatsapp) {
        var digits = v.whatsapp.replace(/\D/g, "");
        var wa = document.getElementById("waFloat");
        if (wa) wa.href = "https://wa.me/" + digits + "?text=" + encodeURIComponent("Hi Daily Drip! I want to order.");
      }
      if (v.email) {
        var fe = document.getElementById("footEmailInline");
        if (fe) { fe.textContent = v.email; fe.href = "mailto:" + v.email; }
      }
      if (v.note) setText("footNote", v.note);
      if (v.copy) setText("copyLine", v.copy);
      if (v.credit) setText("creditLine", v.credit);
    } catch (e) {}
  });

  // 9) Offer popup (existing behaviour, once per session)
  get("popup").then(function (v) {
    if (!v || !v.active) return;
    try {
      if (sessionStorage.getItem("dd_offer_seen")) return;
      setText("offerBadge", v.badge || "");
      setText("offerTitle", v.title || "");
      setText("offerMsg", v.message || "");
      var cta = document.getElementById("offerCta");
      if (cta) {
        cta.textContent = v.cta_text || "View Menu";
        cta.href = v.cta_url || "menu.html";
      }
      var card = document.getElementById("offerCard");
      if (v.image) {
        document.getElementById("offerImg").src = v.image;
        document.getElementById("offerMedia").hidden = false;
        if (card) card.classList.remove("noimg");
      } else {
        document.getElementById("offerMedia").hidden = true;
        if (card) card.classList.add("noimg");
      }
      var modal = document.getElementById("offerModal");
      setTimeout(function () { modal.hidden = false; }, 2500);
      function dismiss() { modal.hidden = true; sessionStorage.setItem("dd_offer_seen", "1"); }
      document.getElementById("offerClose").onclick = dismiss;
      document.getElementById("offerNo").onclick = dismiss;
      modal.addEventListener("click", function (e) {
        if (e.target === modal) dismiss();
      });
    } catch (e) {}
  });
})();
