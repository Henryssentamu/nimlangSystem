from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import mysql.connector

app =  Flask(__name__)
CORS(app)

app.config["SCRATE_KEY"] = "EUURREEUREWWJWJJWJWJ"

employ_service = ""
client_service = ""
auth_service = "http://127.0.0.1:5001"

@app.route("/login", methods=["POST"])
def login():
	response = requests.post(f"{auth_service}/login",json=request.json)
	print(f"api gate way:{response}")
	return jsonify(response.json()), 200


if __name__ == "__main__":
	app.run(port=5000, debug=True)