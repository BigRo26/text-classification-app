from flask import Flask, request, jsonify
from model import predict as model_predict
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST", "GET"])
def predict_endpoint():
    # Get the 'text' field from the incoming JSON request
    data = request.get_json()
    text = data.get("text") if data else ""

    # Perform prediction using the loaded model
    if request.method == "POST":
        result = model_predict(text)
        return jsonify({"Human Generated": result[0], "AI Generated": result[1]})
    else:
        return "No text was provided"

if __name__ == "__main__":
    app.run(debug=True, host='127.0.0.1', port=5000)
