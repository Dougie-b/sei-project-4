from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import status

from .models import Gun

from .serializers.common import GunSerializer

# Create your views here.


class GunListView(APIView):

    def get(self, _request):
        guns = Gun.objects.all()
        serialized_guns = GunSerializer(
            guns, many=True)
        return Response(serialized_guns.data, status=status.HTTP_200_OK)


class GunDetailView(APIView):
    def get_gun(self, pk):
        try:
            return Gun.objects.get(pk=pk)
        except Gun.DoesNotExist:
            raise NotFound(detail="Gun not found")

    def get(self, _request, pk):
        gun = self.get_gun(pk)
        serialized_gun = GunSerializer(gun)
        return Response(serialized_gun.data, status=status.HTTP_200_OK)
