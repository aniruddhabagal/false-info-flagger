import pandas as pd
import wikipedia 
import json
import re
json_dict={}

class data_clean:
    def data_clean():
        train_df=pd.read_csv("ml\\train_data_final.csv")
        i=0
        for act_name in train_df["ACT_NAME"]:
            act_nam=train_df["ACT_NAME"][i]
            act_id=train_df["ACT_ID"][i]
            try:
                data=wikipedia.summary(act_name,sentences=10)
                data=re.sub("\n","",data)
                data=re.sub("==","",data)

                json_dict[i]=[{"act_name":act_nam},{"act_id":act_id},{"act_data":data}]
            except Exception as e:
                pass
            i+=1
            

obj=data_clean.data_clean()

