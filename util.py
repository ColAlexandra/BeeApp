import bcrypt
from functools import wraps
from flask import jsonify


def hash_password(password_text):
    # By using bcrypt the salt is saved into the hash itself
    hashed_bytes = bcrypt.hashpw(password_text.encode('utf-8'), bcrypt.gensalt())
    return hashed_bytes.decode('utf-8')


def verify_password(password_text, hashed_password):
    hashed_bytes_password = hashed_password.encode('utf-8')
    return bcrypt.checkpw(password_text.encode(utf-8), hashed_bytes_password)


def json_response(func):
    """
    Converts the returned dictionary into a JSON response
    :param func:
    :return:
    """
    @wraps(func)
    def decorated_function(*args, **kwargs):
        return jsonify(func(*args, **kwargs))

    return decorated_function
