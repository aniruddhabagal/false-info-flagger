
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from sentence_transformers import SentenceTransformer



# class Model:
#     def find_similarity(text_data,find_data):
#         doc=[text_data,find_data]
#         model = SentenceTransformer('bert-base-nli-mean-tokens')
#         text_embeddings = model.encode(doc, batch_size = 100, show_progress_bar = True)
#         np.shape(text_embeddings)
#         similarities = cosine_similarity(text_embeddings)
#         return similarities
        

doc=[""]

model = SentenceTransformer('bert-base-nli-mean-tokens')
text_embeddings = model.encode(doc, batch_size = 100, show_progress_bar = True)
np.shape(text_embeddings)
similarities = cosine_similarity(text_embeddings)
#  return similarities
        