from rest_framework.views import APIView

from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Create your views here.


class LoadoutListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly)
