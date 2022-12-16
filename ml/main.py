from flask import Flask,jsonify,request

app=Flask(__name__)


app.secret_key = "secret key"
app.config['SERVER_NAME'] = 'localhost:5000'

@app.route("/")
def index():
    return jsonify("Hello wordl")


@app.route("/predection",methods=['GET',"POST"])
def pred():
    if request.method=="POST":
        text_data=request.form("text")
        
