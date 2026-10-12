import os, re, psycopg2
# DB password via env: set SUPABASE_DB_PASSWORD before running
#   $env:SUPABASE_DB_PASSWORD="..." ; python supabase/seed.py
DB_PASSWORD = os.environ.get("SUPABASE_DB_PASSWORD", "")
if not DB_PASSWORD:
    raise SystemExit("Set SUPABASE_DB_PASSWORD env var first (see README).")
html = open('menu.html', encoding='utf-8').read()
m = re.search(r'var MENU = \[(.*?)\];', html, re.S)
pat = r'\[\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*\]'
rows = re.findall(pat, m.group(1))
print('parsed', len(rows))
catmap = {'bakery':'Morning Bakery','breakfast':'Breakfast','pizza':'Artisan Pizzas','toast':'Artisan Toasts','small':'Small Plates','salad':'Salads','sandwich':'Sandwiches & Wraps','pasta':'Pasta & Bowls','special':'House Specialties','dessert':'Desserts'}
conn = psycopg2.connect(host='aws-0-ap-south-1.pooler.supabase.com', port=6543, dbname='postgres', user='postgres.zbpddqihkkauumkuorqt', password=DB_PASSWORD, connect_timeout=15, sslmode='require')
conn.autocommit = True
cur = conn.cursor()
cur.execute('delete from menu_items')
for i, (ck, name, desc, img) in enumerate(rows):
    cur.execute('insert into menu_items (category,name,description,image_url,sort,active) values (%s,%s,%s,%s,%s,true)', (catmap.get(ck, ck), name, desc, img, i))
cur.execute('delete from home_media')
defaults = [
 ('hero1','video','images/bombay-mumbai-view.mp4','menu_images/01_butter_croissant.webp','Hero film 1',0),
 ('hero2','video','images/bombay-luxury-cafe.mp4','menu_images/03_almond_pistachio_croissant.webp','Hero film 2',1),
 ('menu_film','video','images/food-montage.mp4','menu_images/01_butter_croissant.webp','Food montage',2),
 ('menu_bg','video','images/steam.mp4','menu_images/11_avocado_royale.webp','Steam loop',3),
 ('space','video','images/bombay-luxury-cafe.mp4','','Our space',4),
]
for slot, kind, url, poster, title, s in defaults:
    cur.execute('insert into home_media (slot,kind,url,poster,title,sort,active) values (%s,%s,%s,%s,%s,%s,true)', (slot, kind, url, poster, title, s))
cur.execute('select count(*) from menu_items')
print('menu_items:', cur.fetchone())
cur.execute('select count(*) from home_media')
print('home_media:', cur.fetchone())
conn.close()
