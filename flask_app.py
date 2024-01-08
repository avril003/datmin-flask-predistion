import numpy as np
import pandas as pd
import pickle
import os
from flask import Flask, request, jsonify, render_template

app = Flask(__name__, static_folder='static')

model = pickle.load(open('model_avril.pkl', 'rb'))

@app.route("/")
def Home():
    return render_template('index.html')

@app.route("/Table")
def table():
    file_path = os.path.join(os.path.abspath(os.path.dirname(__file__)),'mobil.csv')
    df = pd.read_csv(file_path)
    file_path = 'mobil.csv'
    print("Attempting to read file from:", file_path)
    return render_template('table-basic.html', tables=[df.to_html(classes='data')], titles=df.columns.values)



@app.route("/Form")
def form():
    return render_template('pages-profile.html')

@app.route('/predict', methods=["POST"])
def predict():
    float_feature = [float(x) for x in request.form.values()]
    features = [np.array(float_feature)]
    prediction = model.predict(features)

    return render_template("pages-profile.html", prediction_text = "Hasil Prediksi harga mobil {}".format(prediction[0]))

if __name__ =="__main__":
    app.run(debug=True)
