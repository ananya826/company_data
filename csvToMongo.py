import pymongo
import pandas as pd
import json
# Connect to MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017")
df = pd.read_csv("company_records.csv")
#print(df.head())
print(df.shape)
#converting csv into json as mongoDB accepts json format
data = df.to_dict(orient='records')
# print(data)
# Insert data into MongoDB
db = client["Company_database"]  # Database name
print(db)
db.users.insert_many(data)

 