from flask import Flask, redirect,request,jsonify
from flask_cors import CORS
import mysql.connector


app = Flask(__name__)
app.config["SCRATE_KEY"]= "DX3MHURNIUFEW"
CORS(app)



@app.route("/registeringClients", methods=["POST"])
def registeringClients():
		formData = request.form
		photo = request.files
		print(f"form:{formData} /n")
		print(f"iles:{photo}")
		return jsonify({"status":"ok"})
	
if __name__ == "__main__":
	app.run(port=5003,debug=True)