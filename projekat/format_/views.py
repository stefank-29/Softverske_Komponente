from django.shortcuts import render
from django.http import HttpResponse
from .Entitet import Entitet
from django.shortcuts import redirect,reverse
from .jsonImplementation import JSON
from npm.finders import npm_install

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
    
def dataBaseTable(request):
       entitet = request.session['e']
      
       if request.method == "POST":
              
              nizRedova=[]
              count = request.POST.get('count')       
              for i in range(int(count)+1): 
                     red =[] 
                     for j in entitet.get('attributes'): 
                            
                            red.append(request.POST.get(f'{j}-{i+1}'))              
                     nizRedova.append(red)
              request.session['niz']=nizRedova
              return redirect('table')
       else: 
                
             
              
              return render(request, 'html/initDataBase.html',{'entitet':entitet})


def dbTable(request):
       nizRedova = request.session['niz']
       ent = request.session['e']

       entitet = Entitet(ent.get('title'),ent.get('attributes'))
       
       json = JSON(entitet.title,entitet.attributes,nizRedova)

       return render(request, 'html/dbTable.html',{'entitet':entitet,'data':nizRedova})