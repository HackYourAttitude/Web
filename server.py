from flask import Flask, render_template, request, redirect, url_for, session, flash, jsonify

app = Flask(__name__)


@app.route('/')
def main_page():
    return render_template("MainPage.html")


@app.route("/realizacje")
def realizations():
    return render_template("Realizations.html")


@app.route("/omnie")
def aboutMe():
    return render_template("AboutMe.html")


@app.route("/sklep")
def shop():
    return render_template("Shop.html")


@app.route("/kontakt", methods=["GET"])
def contactFormLoadPage():
    return render_template("ContactForm.html")


@app.route("/kontakt", methods=["POST"])
def contactFormCollectData():
    userInputData = request.data

    # zapisujemy dane do bazy danych

    return jsonify({}), 200


if __name__ == "__main__":
    app.run(debug=True, port=5000)
