-- Daily Drip Cafe — Supabase schema (run once in SQL Editor or via pooler)
-- Project: zbpddqihkkauumkuorqt | Buckets: media (videos+images), images (compat)
-- Admin panel (admin.html) uses anon/publishable key, so tables + storage are
-- open for anon read/write. Tighten later with Supabase Auth if needed.

-- 1) Tables ---------------------------------------------------------------
create table if not exists public.site_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.home_media (
  id bigserial primary key,
  slot text not null,               -- hero1 | hero2 | menu_bg | menu_film | gallery | space
  kind text not null default 'video', -- video | image
  url text not null,
  path text,                          -- storage path when uploaded via admin
  poster text,
  title text,
  sort int not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.menu_items (
  id bigserial primary key,
  category text not null,
  name text not null,
  description text not null default '',
  image_url text not null,
  image_path text,
  sort int not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

-- Helpful indexes
create index if not exists home_media_slot_idx on public.home_media (slot, sort);
create index if not exists menu_items_cat_idx on public.menu_items (category, sort);

-- 2) RLS: open for anon (admin panel uses publishable key) -----------------
alter table public.site_settings enable row level security;
alter table public.home_media enable row level security;
alter table public.menu_items enable row level security;

drop policy if exists "public read settings" on public.site_settings;
create policy "public read settings" on public.site_settings for select using (true);
drop policy if exists "anon write settings" on public.site_settings;
create policy "anon write settings" on public.site_settings for all using (true) with check (true);

drop policy if exists "public read home_media" on public.home_media;
create policy "public read home_media" on public.home_media for select using (true);
drop policy if exists "anon write home_media" on public.home_media;
create policy "anon write home_media" on public.home_media for all using (true) with check (true);

drop policy if exists "public read menu" on public.menu_items;
create policy "public read menu" on public.menu_items for select using (true);
drop policy if exists "anon write menu" on public.menu_items;
create policy "anon write menu" on public.menu_items for all using (true) with check (true);

-- 3) Storage buckets (media + images) --------------------------------------
insert into storage.buckets (id, name, public)
values ('media','media', true), ('images','images', true)
on conflict (id) do update set public = true;

-- 4) Storage policies: public read, anon upload/update/delete --------------
-- (Size <250KB is enforced client-side in admin.html via WebP compression.
--  Supabase storage policies cannot check file size, so the admin NEVER
--  uploads raw files — it compresses to WebP first. See compressImage().)

drop policy if exists "public read media" on storage.objects;
create policy "public read media"
on storage.objects for select using (bucket_id in ('media','images'));

drop policy if exists "anon upload media" on storage.objects;
create policy "anon upload media"
on storage.objects for insert with check (bucket_id in ('media','images'));

drop policy if exists "anon update media" on storage.objects;
create policy "anon update media"
on storage.objects for update using (bucket_id in ('media','images'));

drop policy if exists "anon delete media" on storage.objects;
create policy "anon delete media"
on storage.objects for delete using (bucket_id in ('media','images'));

-- 5) Default homepage config (matches current index.html) -------------------
insert into public.site_settings (key, value) values
('hero', '{
  "videos": [
    {"slot":"hero1","url":"images/bombay-mumbai-view.mp4","poster":"menu_images/01_butter_croissant.webp","active":true},
    {"slot":"hero2","url":"images/bombay-luxury-cafe.mp4","poster":"menu_images/03_almond_pistachio_croissant.webp","active":true}
  ],
  "space_video": "images/bombay-luxury-cafe.mp4",
  "food_film": "images/food-montage.mp4",
  "steam_film": "images/steam.mp4"
}'::jsonb)
on conflict (key) do update set value = excluded.value, updated_at = now();

insert into public.site_settings (key, value) values
('admin_meta', '{"max_image_kb": 250, "image_format": "webp", "note": "Farooq rule: every upload compressed to WebP sub-250KB"}'::jsonb)
on conflict (key) do update set value = excluded.value, updated_at = now();
