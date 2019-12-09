from django.shortcuts import render
from catalog.models import Data
from django.http import HttpResponse
#import timezone
# Create your views here.
import json
def index(request):
    context={}

    # Render the HTML template index.html with the data in the context variable
    return render(request, 'index.html', context=context)

def barplot(request):
    context = {}
    return render(request, 'barplot.html', context=context)
def time(request):
    context = {}
    return render(request, 'time.html', context=context)
def Catboost_Acc_Compare(request):
    context = {}
    return render(request, 'Catboost_Acc_Compare.html', context=context)
def Catboost_Matrix(request):
    context = {}
    return render(request, 'Catboost_Matrix.html', context=context)
def model(request):
    #context = {}
    #Data.refresh_from_db()
    num_rs_1 = Data.objects.filter(rs = "1").order_by('?')[:1] #是盜刷
    num_rs_0 = Data.objects.filter(rs = "2").order_by('?')[:1] #不是盜刷
    num_rs_00 = Data.objects.filter(rs = "0").order_by('?')[:1]#不是盜刷
    #num_rs_1.last_contacted = timezone.now()
    
    context = {
        'num_rs_1': num_rs_1,
        'num_rs_0': num_rs_0,
        'num_rs_00': num_rs_00,
    }
    return render(request, 'model.html', context=context)
