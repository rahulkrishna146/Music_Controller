
from django.urls import path
from .views import index

urlpatterns = [
    path('',index),
    path('Join', index),
    path('Create', index),
    path('room/<str:roomCode>', index),
]