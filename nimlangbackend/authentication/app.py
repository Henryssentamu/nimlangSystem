from flask import Flask,request,jsonify
from flask_cors import CORS
import mysql.connector


app = Flask(__name__)
CORS(app)
app.config["SECRATE_KEY"] ="REWIUWURRYY48IW393IE"

@app.route("/login",methods=["POST"])
def login():
	data = request.get_json()
	if data:
		print(f"login service: {data}")
		return {"loginStatus":"ok"}, 200
	return {"loginStatus":"not ok"}, 400



if __name__ == "__main__":
	app.run(port=5001, debug=True)