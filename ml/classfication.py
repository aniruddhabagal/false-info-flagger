
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from sentence_transformers import SentenceTransformer
import json
from BERT_model import predict
contradiction=[]
entailment=[]
neutral=[]

file_name=open('ml\\New_data\\data.json')
doc=[]
# class Model:
#     def find_similarity(text_data,find_data):
#         doc=[text_data,find_data]
model = SentenceTransformer('bert-base-nli-mean-tokens')
text_embeddings = model.encode(doc)
np.shape(text_embeddings)



json_data=json.load(file_name)
data_keys=json_data.keys()

it=len(data_keys)

def find_similarity(text):
    doc.append(text)
    for i in data_keys:
           ans= predict(json_data['0'][1]['act_info'],text)
           entailment=ans["entailment"]
    

    if max(entailment)<=0:
        return False
    else:

    

                
            