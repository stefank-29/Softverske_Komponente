from django.shortcuts import render
from django.http import HttpResponse
from .Entitet import Entitet
from django.shortcuts import redirect,reverse
from .jsonImplementation import JSON  
import glob
import os
from django.core.files.storage import FileSystemStorage
import os
import platform
import subprocess
global ent
def home(request):
                                          
      
       if request.method == "POST":
             
              impl = request.POST.get('typeInput')
              print(request.POST.get('typeInput'))
              if impl == 'Custom' or impl == 'json' or impl == 'xml':
                     request.session['putanja']=None
                     return redirect('entity')
              else:
                     putanja = request.POST.get('myfile')
                     # putanja = request.FILES['myfile'].read()
                     request.session['putanja']=putanja

                     return redirect('table')
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
              entitet = Entitet(title,atributi,id_) 
              
              request.session['e']=entitet.__dict__
              
              return redirect('test')            
             
              
       else:       
              return render(request,"html/makeEntity.html")       
    
def dataBaseTable(request):
       ent = request.session['e']
       id_ = request.session['id_'] 
       entitet = Entitet(ent.get('title'),ent.get('attributes'),id_)
       
        
       if request.method == "POST":
              ent = request.session['e']
              nizRedova=[]
              count = request.POST.get('count')
                    
              for i in range(int(count)+1): 
                     
                     red =[] 
                     if id_ == 'autoIncrement':
                            red.append(i+1)
                            
                     for j in ent.get('attributes'): 
                            if request.POST.get(f'{j}-{i+1}') == None:
                                   continue 
                            red.append(request.POST.get(f'{j}-{i+1}'))
                     

                     nizRedova.append(red)
              request.session['niz']=nizRedova
            
             
              file_ = entitet.title +'.json'
              json = JSON(entitet.title,entitet.attributes,nizRedova,file_)
              json.write()

              json.delete({"id": 1,"j": "s"})
              return redirect('table')
              
       else: 
                
             
              
              return render(request, 'html/initDataBase.html',{'entitet':entitet})


def dbTable(request):
       nizRedova = []
       
       entitet = Entitet(None,[],None)
       if request.session['putanja'] == None: 
            ent = request.session['e']

            entitet.attributes = ent.get('attributes')
            entitet.title = ent.get('title')
            entitet.id_=0       
       else:
            attr = []
            plat = platform.system()
            fajl = None
            f = request.session['putanja']
            if plat == 'Linux':
                fajl=subprocess.getoutput(f'find "$(cd ..; pwd)" -name {f}')
            
            
            print('p')
            
            print(request.session['putanja'])
            fajl=subprocess.getoutput(f'find "$(cd ..; pwd)" -name {f}')
            # fajl = fajl + '/' +str(request.session['putanja'])
            print(fajl)
            json = JSON(entitet.title,entitet.attributes,nizRedova,fajl)
            obj=json.read(fajl)
            entitet.title = obj[0].get('Ime')  
            
            for i in obj[1].keys():
                attr.append(i)
               
            for iterator in obj[1:]:
                red = []
                for v in iterator.values():
                    
                    red.append(v)
                
                nizRedova.append(red)
            entitet.attributes = attr
            entitet.id_=0
                                                             
       
       if request.method == "POST":
        print('post')
        if request.POST.get('delete'):
            input = request.POST.get('get')
            print('sds')
            print(input)      
        elif request.POST.get('update'):
            print('aaaa')       

       
       
       
       return render(request, 'html/dbTable.html',{'entitet':entitet,'data':nizRedova})