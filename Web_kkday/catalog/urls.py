# -*- coding: utf-8 -*-
"""
Created on Fri Sep 20 16:06:45 2019

@author: smile
"""

from django.urls import path
from . import views


urlpatterns = [
    
   path('', views.index, name='index'),
   path('model', views.model, name='model'),
   path('barplot/', views.barplot, name='barplot'),
   path('time/', views.time, name='time'),
   path('Catboost_Acc_Compare/', views.Catboost_Acc_Compare, name='Catboost_Acc_Compare'),
   path('Catboost_Matrix/', views.Catboost_Matrix, name='Catboost_Matrix'),
   #path('datas/', views.DataListView.as_view(), name='datas'),

]