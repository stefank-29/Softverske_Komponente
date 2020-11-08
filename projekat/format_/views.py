from django.shortcuts import render
from django.http import HttpResponse
from .Entitet import Entitet
def home(request):
                                          
       return render(request, "html/home.html")

def makeEntity(request):
     
       if request.method == "POST":
              title = request.POST.get('name')
              atributi = []
              
              for i in range (1,100):
                     atribut = request.POST.get('attribute-' + str(i))
                     if atribut is None:
                            break
                     else:
                            atributi.append(atribut)
              entitet = Entitet(title,atributi) 
              
                
              
              
       return render(request,"html/makeEntity.html")       
    
def dataBaseTable(request):
       return render(request,"html/initDataBase.html")
