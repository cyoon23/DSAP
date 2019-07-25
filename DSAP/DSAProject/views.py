from django.http import HttpResponse
from django.shortcuts import render
from .models import Post

# Create your views here.
def landingPage(request):
    postList = Post.objects.all()
    context = {
        'posts': postList,
    }
    return render(request, 'posts/landingPage.html', context)
