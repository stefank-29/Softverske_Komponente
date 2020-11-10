import json
from django.db import models
 
class Entitet():
   def __init__(self,title,attributes,id_):
        self.title=title
        self.id_ = id_
        self.attributes = attributes.copy()
   def toci(self):
      # i = len(self.attributes)
       
      # self.lista={}
       for i in self.attributes:
          self.__setattr__(i,input())
       del(self.attributes)   






       
       





