from flask import Flask,request,jsonify
from flask_cors import CORS
import mysql.connector


app = Flask(__name__)
CORS(app)
app.config["SECRATE_KEY"] ="REWIUWURRYY48IW393IE"

@app.route("/login",methods=["POST"])
def login():
	whoisloginingIn = request.json.get("type")
	if whoisloginingIn == "admin":
		data = request.json.get("data")
		# login addmin and on return, include user as admin
		print(data)
		return jsonify({"loginStatus":"ok","user":"admin"}), 200
	elif whoisloginingIn == "officer":
		data = request.json.get("data")
		print(f" officer:{data}")
		return jsonify({"loginStatus":"ok","user":"admin"}), 200 
	elif whoisloginingIn == "focalPerson":
		data = request.json.get("data")
		print(f" officer:{data}")
		return jsonify({"loginStatus":"ok","user":"admin"}), 200
	return {"loginStatus":"not ok"}, 400





if __name__ == "__main__":
	app.run( host="0.0.0.0",port=5000, debug=True)