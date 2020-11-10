import json



class JSON():
    def __init__(self, entity, attributes,data,file_):
        self.entity = entity
        self.attributes = attributes
        self.file = file_
        self.table = []
        self.data = data
        self.toci()                
        

    def toci(self):
        self.table.append({'Ime':self.entity})
        for instance in self.data:
            dictionary = {}
            for (atr, elem) in zip(self.attributes, instance):
                dictionary[atr] = elem
            self.table.append(dictionary)
    
    
    def write(self):
        f=open(self.file, "w")
        
        # for row in self.table:
        #     jsonRows.append(json.dumps(row, indent=4))


        f.write(json.dumps(self.table, indent=4))
            
        f.close()

    def read(self, file_):
        with open(file_, 'r') as f:
            docs = json.load(f)
            return docs
            # for doc in docs:
            #     for k, v in doc.items():
            #         print(f"{k} {v}")

    def delete(self,obj):
        
        for d in self.table:
            if d == obj:
                self.table.remove(obj)
        print(self.table)        
        self.write()        
                 
                



