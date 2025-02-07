from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import mysql.connector

app =  Flask(__name__)
CORS(app)

app.config["SCRATE_KEY"] = "EUURREEUREWWJWJJWJWJ"

employ_service = "http://127.0.0.1:5002"
client_service = ""
auth_service = "http://127.0.0.1:5001"

@app.route("/login", methods=["POST"])
def login():
	response = requests.post(f"{auth_service}/login",json=request.json)
	return jsonify(response.json()), 200

# @app.route("/recruiteEmployee", methods=["POST"])
# def recruiteEmployee():
# 	if request.content_type.startswith("multipart/form-data"):
# 		response = requests.post(f"{employ_service}/recruiteEmployee", files=request.files, data=request.form)
# 		print(f"gate way:{request.files}")
# 		return jsonify(response.json()),200




# @app.route("/recruiteEmployee", methods=["POST"])
# def recruiteEmployee_gateway():
#     if request.content_type.startswith("multipart/form-data"):
#         response = requests.post(f"{employ_service}/recruiteEmployee", files=request.files, data=request.form)
#         print(f"Gateway received files: {request.files}")
#         return jsonify(response.json()), 200
#     return jsonify({"error": "Invalid request type"}), 400

@app.route("/recruiteEmployee", methods=["POST"])
def recruiteEmployee_gateway():
    if request.content_type.startswith("multipart/form-data"):
        # Convert files to a format that preserves file content
        files = {key: (file.filename, file.stream, file.content_type) for key, file in request.files.items()}
        
        # Forward request with `stream=True`
        response = requests.post(f"{employ_service}/recruiteEmployee", files=files, data=request.form, stream=True)

        print(f"Gateway received files: {request.files}")
        return response.json(), response.status_code

    return jsonify({"error": "Invalid request type"}), 400



if __name__ == "__main__":
	app.run(port=5000, debug=True)