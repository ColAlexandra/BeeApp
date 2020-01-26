from flask import Flask, render_template, redirect,request,url_for,session, escape
import os
import data_manager
# from util import json_response
import util

app = Flask(__name__)
app.secret_key = os.urandom(10)


@app.route('/')
def index_page():
    return render_template('index.html')


@app.route('/register', methods=["GET", "POST"])
def register():
    if request.method == "GET":
        return render_template('register.html')
    if request.method == "POST":
        username = request.form['usernameRegister']
        password = request.form['passwordRegister']
        password_confirm = request.form['passwordConfirm']
        email = request.form['email']

        if data_manager.username_exist(username):
            return render_template('register.html', message='Username already exist')
        if password != password_confirm:
            return render_template('register.html', message='Two passwords don\'t match')
        else:
            hash_password = util.hash_password(password)
            data_manager.register_user(username, email, hash_password)
            return redirect('/login')


@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect('logout.html')


# @app.route('/userPage')
# def user_page():
#     return render_template('userPage.html')


@app.route('/login', methods=["GET", "POST"])
def login_page(invalid_login=False):
    if request.method == "GET":
        return render_template('login.html', invalid_login=invalid_login)
    elif request.method == "POST":
        username = request.form['username']
        text_password = request.form['password']

        if data_manager.username_exist(username):
            hashed_password = data_manager.get_hashed_password(username)
            if util.verify_password(text_password, hashed_password):
                session['username'] = username
                return redirect('userPage.html')
        else:
            return render_template('login.html', message='Incorrect login or password, please try again', invalid_login=True)


def main():
    app.run(debug=True)

    # Serving the favicon
    with app.app_context():
        app.add_url_rule('/favicon.ico', redirect_to=url_for('static', filename='img/favicon.ico'))


if __name__ == '__main__':
    main()