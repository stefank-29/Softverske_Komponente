from django.shortcuts import render
from django.http import HttpResponse
from .Entitet import Entitet
from django.shortcuts import redirect,reverse

global ent
def home(request):
                                          
     
       if request.method == "POST":
              
              impl = request.POST.get('typeInput')
              
              return redirect('entity')
              # return render(request,"html/makeEntity.html" , {'impl':impl})       
       else:
              return render(request, "html/home.html")
def makeEntity(request):
     
       if request.method == "POST":
              
              title = request.POST.get('name')
              atributi = []
              #################################uraditi count opet
              for i in range (1,100):
                     atribut = request.POST.get('attribute-' + str(i))
                     if atribut is None:
                            break
                     else:
                            atributi.append(atribut)
              entitet = Entitet(title,atributi) 
              
              request.session['e']=entitet.__dict__
              
              return redirect('test')            
             
              
       else:       
              return render(request,"html/makeEntity.html")       
    
def dataBaseTable(request,entitet=None):
       if request.method == "POST":
              
              return render(request, 'html/dbTable.html')
       else: 
                
              entitet = request.session['e']
              print(entitet)
              return render(request, 'html/initDataBase.html',{'entitet':entitet})


def dbTable(request):
       title = 'Skola'
       atributi = ['ime', 'prezime', 'razred']
       student1 =  ['stefan', 'karaferovic', '3']
       student2 =  ['luka', 'jovanovic', '3']
       entitet = Entitet(title, atributi)

       data = [student1, student2]

       return render(request, 'html/dbTable.html', {'entitet': entitet, 'data':data})