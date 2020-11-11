import json
from django.db import models
from operator import itemgetter, attrgetter
 
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
      print(self.table)
                
      self.write(file_) 


   def sort(self, attributes): # tuple sa atributima i da li je rast ili opad
      
    for key, reverse in reversed(attributes):
        self.table.sort(key=attrgetter(key), reverse=reverse)
    #return self.table
       
    #sort(list(student_objects), (('grade', True), ('age', False)))
       

    def filter(self, lists):  # [atribut, compare, value] ovde lista listi
        filtered_list = self.table
       
    
        for list_ in lists:
            if list_[1] == '==':
                filtered_list = [x for x in filtered_list if x[list_[0]] == list_[2]]
            elif list_[1] == '>':
                filtered_list = [x for x in filtered_list if x[list_[0]] > list_[2]] 
            elif list_[1] == '<':
                filtered_list = [x for x in filtered_list if x[list_[0]] < list_[2]] 
            elif list_[1] == 'pocinje sa':
                filtered_list = [x for x in filtered_list if x[list_[0]].startswith(list_[2])]

        #izrenderovati filtered_list