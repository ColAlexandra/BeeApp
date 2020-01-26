import connection_db


@connection_db.connection_handler
def register_user(cursor, username, email, hash_password):
    cursor.execute("""INSERT INTO public.user(name, email, hash_password ) 
    VALUES (%(username)s, %(email)s, %(hash_password)s)""",
    {'username': username, 'hash_password': hash_password, 'email': email})


@connection_db.connection_handler
def get_hashed_password(cursor, username):
    cursor.execute("""SELECT password FROM public.user WHERE username = %(username)s""", {'username': username})
    hashed_password = cursor.fetchone()
    return hashed_password['hash_password']


@connection_db.connection_handler
def username_exist(cursor, name):
    cursor.execute("""SELECT name FROM public.user""")
    list_of_users = [user['name'] for user in cursor.fetchall()]
    return name in list_of_users
