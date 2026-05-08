from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from data import profile
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv(
    "DATABASE_URL", "postgresql://localhost/portfolio"
)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)


@app.route("/api/health")
def health():
    return jsonify({"status": "ok"})


@app.route("/api/profile")
def get_profile():
    return jsonify(profile)


if __name__ == "__main__":
    app.run(debug=True)
