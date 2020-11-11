from django.shortcuts import render
from django.http import HttpResponse
from .Entitet import Entitet
from django.shortcuts import redirect,reverse

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
             
              if impl == 'custom' or impl == 'json' or impl == 'xml':
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
              entitet = Entitet(title,atributi,id_,None) 
              
              request.session['e']=entitet.__dict__
              
              return redirect('test')            
             
              
       else:       
              return render(request,"html/makeEntity.html")       
    
def dataBaseTable(request):
       ent = request.session['e']
       id_ = request.session['id_'] 
       entitet = Entitet(ent.get('title'),ent.get('attributes'),id_,None)
       
        
       if request.method == "POST":
              ent = request.session['e']
              nizRedova=[]
              count = request.POST.get('count')
                    
              for i in range(int(count)+1): 
                     
                     red =[] 
                     if id_ == 'autoIncrement':

                            red.append(str(i+1))
                            
                     for j in ent.get('attributes'): 
                            if request.POST.get(f'{j}-{i+1}') == None:
                                   continue 
                            red.append(request.POST.get(f'{j}-{i+1}'))
                     
              
                     nizRedova.append(red)
              request.session['nizRedova']=nizRedova
              entitet.data=nizRedova
              entitet.puniData()
            
             
              file_ = entitet.title +'.json'
              entitet.write(file_)
              return redirect('table')
              
       else: 
                
             
              
              return render(request, 'html/initDataBase.html',{'entitet':entitet})

def praviEntitet(fajl):
            entitet = Entitet(None,[],None,None)
            nizRedova=[]
            attr = []
            content=entitet.read(fajl)  

            print(content[1])
            for i in content[1].get('#_Atributi_#'):
                attr.append(i)
               
            for iterator in content:
                red = []
                if '#_DataBase_#' in iterator:
                       entitet.title = iterator.get('#_DataBase_#') 
                       continue
                if '#_Atributi_#' in iterator:
                    continue    
                for k ,v in iterator.items():
                    
                    red.append(v)
                
                nizRedova.append(red)
            entitet.attributes = attr
            entitet.id_=0
            entitet.data=nizRedova                                   
            entitet.puniData() 
            return entitet     
def dbTable(request):
    #    nizRedova = []
    fajl = None
    if request.session['putanja'] == None: 
        ent = request.session['e']
        f = ent.get('title') + '.json'
        
        fajl=subprocess.getoutput(f'find "$(cd ..; pwd)" -name {f}')  
       
    else:
        f = request.session['putanja']
        fajl=subprocess.getoutput(f'find "$(cd ..; pwd)" -name {f}')
       
    
    entitet = praviEntitet(fajl)
    print(entitet.data)
    #    if request.session['putanja'] == None: 
    #         # ent = request.session['e']
    #         # nizRedova = request.session['nizRedova']  
    #         # entitet.attributes = ent.get('attributes')
    #         # entitet.title = ent.get('title')
    #         # entitet.data = nizRedova
    #         # entitet.id_=0
    #         # entitet.puniData()
    #         # f = entitet.title + '.json'
    #         # fajl=subprocess.getoutput(f'find "$(cd ..; pwd)" -name {f}')

                 
    #    else:
    #         # attr = []
    #         plat = platform.system()
    #         # fajl = None
    #         f = request.session['putanja']
    #         if plat == 'Linux':
    #             fajl=subprocess.getoutput(f'find "$(cd ..; pwd)" -name {f}')
            
            
            
            
            
           
    #         # # fajl = fajl + '/' +str(request.session['putanja'])
            
    #         # content=entitet.read(fajl)  
           
    #         # if content[1] is not None:
    #         #     for i in content[1].keys():
    #         #         attr.append(i)
               
    #         # for iterator in content:
    #         #     red = []
    #         #     if '#_DataBase_#' in iterator:
    #         #            entitet.title = iterator.get('#_DataBase_#') 
    #         #            continue
    #         #     for k ,v in iterator.items():
                    
    #         #         red.append(v)
                
    #         #     nizRedova.append(red)
    #         # entitet.attributes = attr
    #         # entitet.id_=0
    #         # entitet.data=nizRedova                                   
    #         # entitet.puniData()  
    if request.method == "POST":
        if request.POST.get('delete'):
            
            deleteObject = {}
            input_=request.POST.getlist('hd') 
            for k ,v in zip(entitet.attributes,input_):
                deleteObject[k] = v
            print(deleteObject)
            entitet.delete(deleteObject,fajl)
                
            return redirect('table')
                
        elif request.POST.get('update'):
            print('aaaa')       

       
       
      
    else:
            # entitet = praviEntitet(fajl)
        return render(request, 'html/dbTable.html',{'entitet':entitet})