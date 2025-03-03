from flask import Flask, redirect,request,jsonify
from flask_cors import CORS
import mysql.connector


app = Flask(__name__)
app.config["SCRATE_KEY"]= "DX3MHURNIUFEW"
CORS(app)



@app.route("/registeringClients", methods=["POST","GET"])
def registeringClients():
		if request.method == "POST":
			formData = request.form
			photo = request.files
			if formData and photo:
				return jsonify({"status":"ok"})
	
if __name__ == "__main__":
	app.run(host="0.0.0.0",port=5000,debug=True)