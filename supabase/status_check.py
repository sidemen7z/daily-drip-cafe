import os
import psycopg2
c = psycopg2.connect(host='aws-0-ap-south-1.pooler.supabase.com', port=6543, dbname='postgres', user='postgres.zbpddqihkkauumkuorqt', password=os.environ['SUPABASE_DB_PASSWORD'], connect_timeout=15, sslmode='require')
cur = c.cursor()
cur.execute("select tablename from pg_tables where schemaname='public' order by 1")
print('TABLES:', cur.fetchall())
cur.execute('select count(*) from menu_items')
print('menu_items:', cur.fetchone()[0])
cur.execute('select count(*) from home_media')
print('home_media:', cur.fetchone()[0])
cur.execute('select key, left(value::text,90), updated_at from site_settings order by 1')
for r in cur.fetchall():
    print('SET', r[0], '|', r[1], '|', r[2])
cur.execute('select id, public from storage.buckets order by 1')
print('BUCKETS:', cur.fetchall())
c.close()
