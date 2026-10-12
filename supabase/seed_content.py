import os
import psycopg2
DB_PASSWORD = os.environ.get("SUPABASE_DB_PASSWORD", "")
if not DB_PASSWORD:
    raise SystemExit("Set SUPABASE_DB_PASSWORD env var first.")
conn = psycopg2.connect(host='aws-0-ap-south-1.pooler.supabase.com', port=6543, dbname='postgres', user='postgres.zbpddqihkkauumkuorqt', password=DB_PASSWORD, connect_timeout=15, sslmode='require')
conn.autocommit = True
cur = conn.cursor()
cur.execute("insert into site_settings (key, value) values ('content', %s) on conflict (key) do nothing", ('{"eyebrow":"BANDRA WEST \\u2022 MUMBAI","script":"Good coffee. Great food.<br>Better conversations.","title_a":"More Than","title_b":"Just","accent":"Coffee","story":"Daily Drip is a cozy, warm cafe in the heart of Bandra West \\u2014 specialty coffee, globally inspired food and a welcoming space for everyone. Work, chill or catch up over fresh bakes."}',))
cur.execute("insert into site_settings (key, value) values ('popup', %s) on conflict (key) do nothing", ('{"active":false,"badge":"WELCOME","title":"Welcome to Daily Drip","message":"Fresh bakes every morning. Ask us about today\\u2019s specials.","cta_text":"Explore Menu","cta_url":"menu.html","image":""}',))
cur.execute('select key, left(value::text,80) from site_settings order by 1')
for r in cur.fetchall():
    print(r)
conn.close()
print('DEFAULTS OK')
