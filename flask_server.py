from flask import Flask, request, jsonify 
from flask_cors import cross_origin, CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)



class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    name_1 = db.Column(db.String(80), unique=True, nullable=False)
    name_2 = db.Column(db.String(80), unique=True, nullable=False)
    name_3 = db.Column(db.String(80), unique=True, nullable=False)
    def repr(self):
        return '<User %r>' % self.username


@app.route('/register', methods=['GET'])
def register():

    data = request.json
    id = data.get('id')
    username = data.get('username')
    password = data.get('password')
    name_1 = data.get('name_1')
    name_2 = data.get('name_2')
    name_3 = data.get('name_3')

    existing_user = User.query.filter_by(username=username)
    if existing_user:
        return jsonify({'error': 'User already exists'}), 400

    new_user = User(username=username, password=password, name_1=name_1, name_2=name_2, name_3=name_3)
    db.session.add(new_user)
    db.session.commit()

    response = {'message': 'Registration successful', 'username': username}

    return jsonify(response)


@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    user_list = [{'id': user.id, 'username': user.username, 'name_1':user.name_1, 'name_2':user.name_2,'name_3':user.name_3} for user in users]
    return jsonify(user_list)


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
