# from flask import Flask, jsonify, request
# from flask_cors import CORS
# import requests
# import mysql.connector
# import requests
# app =  Flask(__name__)
# CORS(app)

# app.config["SCRATE_KEY"] = "EUURREEUREWWJWJJWJWJ"

# employ_service = "http://Employee:5000"
# client_service = "http://Clients:5000"
# auth_service = "http://authentication:5000"

# @app.route("/login", methods=["POST"])
# def login():
#     """
#         This login end point just recieves post requests from the client server
#         And forward them to the authentication service which determins who wants to login 
#         By checking the type parameter in the request
#     """
#     response = requests.post(f"{auth_service}/login",json=request.json)
#     return jsonify(response.json()), 200


# @app.route("/admin", methods=["POST","GET"])
# def admin():
#       if request.method == "POST":
#         response = requests.post(f"{employ_service}/admin", json=request.json, stream=True)
#         return jsonify(response.json()),200


# @app.route("/recruiteEmployee", methods=["POST"])
# def recruiteEmployee_gateway():
#     if request.content_type.startswith("multipart/form-data"):
#         # Convert files to a format that preserves file content
#         files = {key: (file.filename, file.stream, file.content_type) for key, file in request.files.items()}
        
#         # Forward request with `stream=True`
#         response = requests.post(f"{employ_service}/recruiteEmployee", files=files, data=request.form, stream=True)
#         return response.json(), response.status_code

#     return jsonify({"error": "Invalid request type"}), 400

# @app.route("/registeringClients", methods=["POST"])
# def registeringClients():
     
#         # Convert files to a format that preserves file content
#         files = {key:(file.filename, file.stream, file.content_type )for key, file in request.files.items()}
#         # Forward request with `stream=True`
#         response = requests.post(f"{client_service}/registeringClients", files=files,data=request.form, stream=True)
#         return response.json(), response.status_code



# if __name__ == "__main__":
# 	app.run(port=5000, debug=True)

from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

app.config["SECRET_KEY"] = "EUURREEUREWWJWJJWJWJ"

# Use service names as strings instead of making requests at startup
employ_service = "http://employee:5000"
client_service = "http://clients:5000"
auth_service = "http://authentication:5000"

@app.route("/login", methods=["POST"])
def login():
    """
    This login endpoint receives POST requests from the client server
    and forwards them to the authentication service.
    """
    response = requests.post(f"{auth_service}/login", json=request.json)
    return jsonify(response.json()), response.status_code

@app.route("/admin", methods=["POST", "GET"])
def admin():
    if request.method == "POST":
        response = requests.post(f"{employ_service}/admin", json=request.json)
        return jsonify(response.json()), response.status_code
    return jsonify({"message": "Admin GET request not implemented"}), 501

@app.route("/recruiteEmployee", methods=["POST"])
def recruite_employee_gateway():
    if request.content_type.startswith("multipart/form-data"):
        files = {key: (file.filename, file.stream, file.content_type) for key, file in request.files.items()}
        response = requests.post(f"{employ_service}/recruiteEmployee", files=files, data=request.form)
        return response.json(), response.status_code
    return jsonify({"error": "Invalid request type"}), 400

@app.route("/registeringClients", methods=["POST"])
def registering_clients():
    files = {key: (file.filename, file.stream, file.content_type) for key, file in request.files.items()}
    response = requests.post(f"{client_service}/registeringClients", files=files, data=request.form)
    return response.json(), response.status_code

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
