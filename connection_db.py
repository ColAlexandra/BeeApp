import psycopg2;
import psycopg2.extras;
import os


def get_connection_string():
    user_name = os.environ.get('user_name')
    password = os.environ.get('password')
    host = os.environ.get('host')
    database_name = os.environ.get('database_name')

    env_variables_defined = user_name and password and host and database_name

    if env_variables_defined:
        return'postgresql://{user_name}:{password}@{host}/{database_name}'.format(
            user_name=user_name,
            password=password,
            host=host,
            database_name=database_name
        )
    else:
        raise KeyError('Some necessary environement variable(s) are not defined')


def open_database():
    try:
        connection_string = get_connection_string()
        connection = psycopg2.connect(connection_string)
        connection.autocommit = True
    except psycopg2.DatabaseError as exception:
        print('Database connection problem')
        raise exception
    return connection


def connection_handler(function):
    def wrapper(*args, **kwargs):
        connection = open_database()
        dir_cur = connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
        ret_value = function(dir_cur, *args, *kwargs)
        dir_cur.close()
        connection.close()
        return ret_value
    return wrapper