# PROMPT — Daily Drip Café Admin Panel: User Manual (PDF)

> Copy everything BELOW the line into your AI / PDF tool (ChatGPT, Claude, Canva AI, Notion AI, etc.) to generate a complete user manual.
> Recommended settings: A4, ~10–14 pages, simple step-by-step English, one screenshot placeholder per section.

---

Generate a **user manual (PDF-ready document)** for the **Daily Drip Café Admin Panel (CMS)** — the private control panel that edits the live café website.

## About the product (context for the manual)

- **Café:** Daily Drip Café, Bandra West, Mumbai.
- **Public website:** homepage (cinematic hero videos, "More Than Just Coffee" headline, brand pillars, Seasonal Specials, Bakery Favourites, Our Space story, photo gallery, Visit/Location band, footer) + a full Menu page with 61+ dishes.
- **Admin panel URL:** `https://daily-drip-cafe.vercel.app/admin`
- **Login:** Admin ID = `admin`, Password = `dailydrip2026`. (Print a warning box: never share the password publicly.)
- **How it works (explain simply):** the admin panel saves to a cloud database (Supabase). The website reads from it on every visit, so saved changes appear live — usually just refresh the site. No coding needed, ever.

## Admin panel structure (must be covered, in this order)

Sidebar has 10 sections:

**WORKSPACE**
1. **Overview** — live dish/media counts, popup status, quick-action buttons, latest dishes list.
2. **Menu Manager** — (a) **Add new dish** form on top: Dish name, Category dropdown, Description, Dish photo (Upload image button + Paste URL button + URL field + preview), "Visible on the menu" checkbox, "Add dish to menu" button. (b) Dishes table: photo, name, category dropdown, image URL field, Live checkbox, Save/Delete per row, search + category filter. (c) **Quick image replace**: pick a dish → choose a photo file → "Compress, upload and link" (auto-compresses to WebP under 250KB).
3. **Offers & Popups** — "Show popup on homepage" switch, Badge line, Button text, Popup title, Popup message, Button link, Popup image URL, Save popup. Note: the popup appears once per visitor (after ~2.5 seconds); to test it again open the site in an Incognito window.

**CONTENT**
4. **Homepage Sections** — (a) Hero films & headline: Hero film 1 + poster, Hero film 2 + poster, Food montage film, Steam loop film, eyebrow line, tagline, headline line 1 / line 2 / accent word. (b) Brand pillars: 4 title + text pairs. (c) Seasonal specials: eyebrow/title/sub + 4 dish pickers (choose live dishes). (d) Bakery favourites: eyebrow/title/sub headings only.
5. **Our Story** — eyebrow, title (tip: type `\n` where the line should break), story paragraph (same text shows on the homepage), space film video URL + film poster image URL, button text + link.
6. **Gallery & Media** — gallery headings + photo frames list: each frame = Image URL + Alt text, with Add frame, up/down reorder arrows, Remove; Save gallery. Plus "Media slots" reusable-link list with Use URL / Show / Hide / Delete.
7. **Locations & Contact** — kicker, title (`\n` = line break), address, hours line, phone, rating line, map query (lat,lng), directions URL, WhatsApp order link + button text.
8. **Footer & Settings** — address line, phone, WhatsApp number (digits only), email, handwritten note line, copyright line, credit line.

**SYSTEM**
9. **Media Library** — file browser for cloud storage: folder dropdown (compressed = optimised photos, menu = dish photos, videos = mp4s), name filter, Browse button, per-file Copy URL + Delete. Plus "Named slots" form: Slot + Kind (video/image) + Title + URL → Add slot.
10. **Upload** — (a) Images: drop a photo or click to browse → auto-compressed to WebP, max 1600px, max 250KB → Compress and upload → Copy public URL. (b) Videos: mp4 up to 25MB, uploaded as-is (720p recommended, hero films ideally under 8 MB), URL auto-copied.

## Core how-to chapters (each = numbered steps + tips)

1. **Logging in and getting around** (URL, ID/password, sidebar, View site button, Save buttons, green "All changes saved" indicator).
2. **How to add an image anywhere** (the golden rule: Upload page → Compress and upload → Copy public URL → paste into the field → Save. Or use the Upload-image button directly inside Add-new-dish.)
3. **How to add/change a poster image** (posters = the still photo shown before a video loads: hero posters in Homepage Sections, space-film poster in Our Story).
4. **How to change a video** (upload mp4 → paste URL into Hero film / Food montage / Steam loop / Space film → Save).
5. **How to add a new dish** (Menu Manager top form, all 5 fields, visibility checkbox).
6. **How to change a dish photo** (Quick image replace, one step).
7. **How to edit, hide or delete a dish** (table row controls + what "Live" unchecked does).
8. **How to change homepage texts** (headline, tagline, pillars, seasonal picks, favourites headings).
9. **How to run an offer popup** (full popup setup + testing in Incognito + turning it off).
10. **How to update gallery, story, location, footer** (one chapter per page, field tables).
11. **Image & video rules cheat-sheet** (table: photos → WebP auto, ≤250KB, ≤1600px; hero video → mp4 ≤25MB upload, ≤8MB ideal, 720p; posters → same as photos; alt text = short description).
12. **Troubleshooting FAQ** (change not showing → hard refresh / wait a minute; popup not showing → it shows once per session, test Incognito; image too big → uploader compresses automatically, if it still fails use a smaller photo; video fails → must be mp4 under 25MB; deleted dish still on Menu page → Menu page falls back to built-in list only when cloud is empty; login fails → check ID/password caps-lock).

## Output requirements

- Title: **"Daily Drip Café — Admin Panel User Manual"**, subtitle "Bandra West, Mumbai".
- Start with a 1-page quick-start ("Add a dish photo in 4 steps").
- Table of contents.
- Every chapter: goal line, numbered steps, a field-reference table (Field | What to type | Example), one **[Screenshot: …]** placeholder, and a "Tips / Warnings" box where relevant.
- Café-brand styling: ivory background, espresso (#241812) headings in serif, caramel (#C69A52) accents.
- End with a one-page "Daily / Weekly checklist" (check popup dates, seasonal picks, new photos, phone/WhatsApp numbers).
