from django.urls import path

from guns.models import Gun
from .views import GunListView

urlpatterns = [
    path('', GunListView.as_view())
]
