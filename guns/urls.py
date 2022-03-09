from django.urls import path

from guns.models import Gun
from .views import GunDetailView, GunListView

urlpatterns = [
    path('', GunListView.as_view()),
    path('<int:pk>/', GunDetailView.as_view())
]
