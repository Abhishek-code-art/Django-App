from django.shortcuts import render
from django.http import JsonResponse

def home(request):
    return JsonResponse({'message': 'Welcome to the home page'})
    

def success_page(request):
    return JsonResponse({"message": "this is a success page"})