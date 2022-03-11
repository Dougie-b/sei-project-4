from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticatedOrReadOnly
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

    def post(self, request):
        request.data["owner"] = request.user.id
        serialized_gun = GunSerializer(data=request.data)
        print(serialized_gun)
        try:
            serialized_gun.is_valid()
            serialized_gun.save()
            return Response(serialized_gun.data, status=status.HTTP_201_CREATED)
        except AssertionError as e:
            print(str(e))
            return Response({
                "detail": str(e)
            }, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except:
            return Response({
                "detail": "Unprocessable Entity"
            }, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


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
