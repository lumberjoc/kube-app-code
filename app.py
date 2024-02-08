# from flask import Flask
# app = Flask(__name__)

# @app.route('/')
# def hello_world():
#     return 'Sup, Fool!'

from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Sup, Fool!'

# if __name__ == '__main__':
#     # Run the Flask app on port 5001 when executed directly
#     app.run(host='0.0.0.0', port=5001)
