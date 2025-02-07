from flask import Flask, request, jsonify
from flask_cors import CORS 
import mysql.connector


app = Flask(__name__)
app.config["SECURITY_KEY"]= "DSFF3RF343F433E"
CORS(app)


# @app.route("/recruiteEmployee", methods=["POST"])
# def recruiteEmployee():
# 	data = request.form
# 	fileData = request.files
# 	if data:
# 		print(data)
# 		print("/n")
# 		print(fileData)
# 		return jsonify({"status":"successful"})
@app.route("/recruiteEmployee", methods=["POST"])
def recruiteEmployee():
    data = request.form
    fileData = request.files

    if "accademic" not in fileData or "photoUpload" not in fileData:
        return jsonify({"error": "Missing required files"}), 400

    academic_file = fileData["accademic"]
    photo_file = fileData["photoUpload"]

    # print("Received form data:", data)
    print("Received files in employee serverice:", academic_file, photo_file)
	

    return jsonify({"status": "successful"})











if __name__ == "__main__":
	app.run(port=5002, debug=True)
