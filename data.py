# Opening the CSV file
import csv

with open('company_records.csv', mode='r') as file:
    # Reading the CSV file
    csvFile = csv.reader(file)
    
    # Skipping the header (uncomment if needed)
    # next(csvFile)  

    # Displaying the contents of the CSV file
    for line in csvFile:
        print(line)