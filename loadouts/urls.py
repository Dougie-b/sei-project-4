from django.urls import path
from .views import LoadoutListView, LoadoutDetailView

urlpatterns = [
    path('', LoadoutListView.as_view()),
    path('<int:pk>/', LoadoutDetailView.as_view())
]
