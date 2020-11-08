from django.shortcuts import render
from django.http import HttpResponse
from .Entitet import Entitet
from django.shortcuts import redirect
def home(request):
                                          
     
       if request.method == "POST":
              
              impl = request.POST.get('typeInput')
              
              return redirect('entity')
              # return render(request,"html/makeEntity.html" , {'impl':impl})       
       else:
              return render(request, "html/home.html")
def makeEntity(request):
     
       if request.method == "POST":
              print('post')
              title = request.POST.get('name')
              atributi = []
              
              for i in range (1,100):
                     atribut = request.POST.get('attribute-' + str(i))
                     if atribut is None:
                            break
                     else:
                            atributi.append(atribut)
              entitet = Entitet(title,atributi) 
              print(entitet.attributes)
              return render(request,"html/initDataBase.html",{'entitet':entitet})
              
             
              
       else:       
              return render(request,"html/makeEntity.html")       
    
def dataBaseTable(request):
       return render(request,"html/initDataBase.html")
