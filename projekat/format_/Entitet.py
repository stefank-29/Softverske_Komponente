import json

class Entitet:
   def __init__(self,title,attributes):
        self.title=title
        self.attributes = attributes.copy()
   def toci(self):
      # i = len(self.attributes)
       
      # self.lista={}
       for i in self.attributes:
          self.__setattr__(i,input())
       del(self.attributes)   






       
       





