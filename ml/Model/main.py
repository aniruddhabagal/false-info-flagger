from flask import Flask,jsonify,request
from classfication import find_similarity

app=Flask(__name__)


app.secret_key = "secret key"
app.config['SERVER_NAME'] = 'localhost:5000'

@app.route("/")
def index():
    return jsonify("Hello wordl")


@app.route("/predection",methods=['GET',"POST"])
def pred():
    if request.method=="POST":
        text_data=request.form["text"]
        check=find_similarity(text_data)
        if check:
            return jsonify("The infor is true")
        else:
            return jsonify("The website conatins improper infromation about user")





    
if __name__=="__main__":
    app.run(debug=True)
