from flask import Flask, request, jsonify
from flask_cors import CORS 
import mysql.connector


app = Flask(__name__)
app.config["SECURITY_KEY"]= "DSFF3RF343F433E"
CORS(app)


@app.route("/admin", methods=["POST","GET"])
def Admin():
    if request.method == "POST":
        bodytype = request.json.get("type")
        if bodytype == "dept":
            data = request.json.get("data")
            print(f"service: {data}")
            return jsonify({"status":"ok"})
        elif bodytype == "branch":
            data = request.json.get("data")
            print(f"service: {data}")
            return jsonify({"status":"ok"})
        elif bodytype == "position":
            data = request.json.get("data")
            print(f"service: {data}")
            return jsonify({"status":"ok"})
             


@app.route("/recruiteEmployee", methods=["POST", "GET"])
def recruiteEmployee():
    if request.method == "POST":
        data = request.form
        fileData = request.files
        if "accademic" not in fileData and "photoUpload" not in fileData:
            return jsonify({"error": "Missing required files"}), 400

        academic_file = fileData["accademic"]
        photo_file = fileData["photoUpload"]

        # print("Received form data:", data)
        print("Received files in employee serverice:", academic_file, photo_file)
        
        return jsonify({"status": "ok"})











if __name__ == "__main__":
	app.run(port=5002, debug=True)
