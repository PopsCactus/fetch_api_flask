from flask import Flask, json, render_template, jsonify, request
from flask.helpers import make_response

import datetime

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():

    return render_template('index.html')


@app.route("/api", methods=['GET', 'POST'])
def geo_code():
    req = request.get_json()

    print(req)
    data = datetime.datetime.now()

    res = make_response(jsonify({'Message': data }), 200)

    return res

if '__main__' == __name__:
    app.run(host="0.0.0.0", port=5005, debug=True)
