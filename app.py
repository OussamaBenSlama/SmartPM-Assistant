from flask import Flask, jsonify, request
import csv
import os
from flask_cors import CORS  # Import the CORS module
from model import get_KPI_insights, talk_to_chatbot, detect_risks, get_recommendation

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)


@app.route('/get-insights', methods=['GET'])
def get_insights():
    with open('data/kpi.csv', 'r') as file:
        csv_reader = csv.DictReader(file)
        csv_data = [row for row in csv_reader]
    report = get_KPI_insights(csv_data)


    return jsonify({"data": report}) 


@app.route('/chat', methods=['GET'])
def talk():
    #retrieve query from request
    data = request.get_json()
    query = data.get('query')
    
    print(query)
    with open('data/kpi.csv', 'r') as file:
        csv_reader = csv.DictReader(file)
        csv_data = [row for row in csv_reader]
    response = talk_to_chatbot(query, csv_data)

    return jsonify({"data": response}) 


@app.route('/risks', methods=['GET'])
def get_risks():
    with open('data/kpi.csv', 'r') as file:
        csv_reader = csv.DictReader(file)
        csv_data = [row for row in csv_reader]
    report = detect_risks(csv_data)


    return jsonify({"data": report})

@app.route('/recommendations', methods=['GET'])
def get_recommendations():
    with open('data/kpi.csv', 'r') as file:
        csv_reader = csv.DictReader(file)
        csv_data = [row for row in csv_reader]
    report = get_recommendation(csv_data)


    return jsonify({"data": report})



if __name__ == '__main__':
    app.run(debug=True)