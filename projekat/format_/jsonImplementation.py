import json



class JSON():
    def __init__(self, entity, attributes,data,file_):
        self.entity = entity
        self.attributes = attributes
        self.file = file_
        self.table = []
        self.table.append({'Ime':self.entity})
        for instance in data:
            dictionary = {}
            for (atr, elem) in zip(attributes, instance):
                dictionary[atr] = elem
            self.table.append(dictionary)
                
        

    
    def write(self):
        f=open(self.file, "w")
        jsonRows = []
        # for row in self.table:
        #     jsonRows.append(json.dumps(row, indent=4))


        f.write(json.dumps(self.table, indent=4))
            
        f.close()

    def read(self, file_):
        with open(file_, 'r') as f:
            docs = json.load(f)

            for doc in docs:
                for k, v in doc.items():
                    print(f"{k} {v}")

        


