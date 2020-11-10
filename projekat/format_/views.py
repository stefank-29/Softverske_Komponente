from django.shortcuts import render
from django.http import HttpResponse
from .Entitet import Entitet
from django.shortcuts import redirect,reverse
from .jsonImplementation import JSON  
import glob
import os
from django.core.files.storage import FileSystemStorage


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
              id_ = request.POST.get('i')
              request.session['id_']=id_
              atributi.append('id')
              #################################uraditi count opet
              for i in range (1,100):
                     atribut = request.POST.get('attribute-' + str(i))
                     if atribut is None:
                            break
                     else:
                            atributi.append(atribut)
              entitet = Entitet(title,atributi,0) 
              
              request.session['e']=entitet.__dict__
              
              return redirect('test')            
             
              
       else:       
              return render(request,"html/makeEntity.html")       
    
def dataBaseTable(request):
       ent = request.session['e']

       entitet = Entitet(ent.get('title'),ent.get('attributes'),0)
       id_ = request.session['id_'] 
        
       if request.method == "POST":
              ent = request.session['e']
              nizRedova=[]
              count = request.POST.get('count')
                    
              for i in range(int(count)+1): 
                     
                     red =[] 
                     if id_ == 'autoIncrement':
                            red.append(i+1)
                     for j in ent.get('attributes'): 
                            
                            red.append(request.POST.get(f'{j}-{i+1}'))
                     

                     nizRedova.append(red)
              request.session['niz']=nizRedova
            
             
              file_ = entitet.title +'.json'
              json = JSON(entitet.title,entitet.attributes,nizRedova,file_)
              json.write()
              return redirect('table')
              
       else: 
                
             
              
              return render(request, 'html/initDataBase.html',{'entitet':entitet})


def dbTable(request):
       nizRedova = request.session['niz']
       ent = request.session['e']

       entitet = Entitet(ent.get('title'),ent.get('attributes'),0)
       
       
       
       
       return render(request, 'html/dbTable.html',{'entitet':entitet,'data':nizRedova})