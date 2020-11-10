from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('entity/',views.makeEntity,name='entity'), 
    path('test/',views.dataBaseTable,name='test'),
    path('table/',views.dbTable,name='table')


]
