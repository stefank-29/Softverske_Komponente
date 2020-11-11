import json
from django.db import models
 
class Entitet():
   def __init__(self,title,attributes,id_,data):
      self.title=title
      self.id_ = id_
      self.data = data
      self.attributes = attributes.copy()
      self.table = []
      
   # def puniAtribute(self):
   #    # i = len(self.attributes)
       
   #    # self.lista={}
   #    for i in self.attributes:
   #       self.__setattr__(i,input())
   #    del(self.attributes)   

   def puniData(self):
        
      for instance in self.data:
         dictionary = {}
         for (atr, elem) in zip(self.attributes, instance):
               dictionary[atr] = elem
         self.table.append(dictionary)
    
    
   def write(self,file_):
      f=open(file_, "w")
        
      naslov = []
      naslov.append({'#_DataBase_#':self.title})
      naslov.append({'#_Atributi_#':self.attributes})
      zaUpis = naslov + self.table   
     
      #  f.write(json.dumps({'#_DataBase_#':self.title}))
      f.write(json.dumps(zaUpis, indent=4))
            
      f.close()

   def read(self, file_):
      with open(file_, 'r') as f:
         docs = json.load(f)

         return docs    
            # for doc in docs:
            #     for k, v in doc.items():
            #         print(f"{k} {v}")

   def delete(self,obj,file_):
      
      for d in self.table:
         if d == obj:
            self.table.remove(d)
        
                
         self.write(file_) 


    
   def update(self,obj,file_,red):
        
        for i in range(1,len(self.table)):
            if i+1 == int(red):
                print(f'{i+1} ,  {red}')
                self.table[i] = obj.copy()

        self.write(file_)

       
       





