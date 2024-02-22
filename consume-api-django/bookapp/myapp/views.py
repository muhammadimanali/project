from django.shortcuts import render
from django.http import HttpResponse
import requests
# Create your views here.
def users(request):
    #pull data from third party rest api
    response = requests.get('http://ulvis.net/api.php?url=https://www.youtube.com/watch?v=9H_4qP90tHUL&custom=johndoe&private=1')
    #convert reponse data into json
    # users = response.json()
    user = response.text
    print(user)
    return HttpResponse(user)
    pass