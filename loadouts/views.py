from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from django.db import IntegrityError

from .models import Loadout
from .serializers.common import LoadoutSerializer
from .serializers.populated import PopulatedLoadoutSerializer

from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Create your views here.


class LoadoutListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, request):
        user = request.user
        loadouts = Loadout.objects.filter(owner=user)
        serialized_loadouts = PopulatedLoadoutSerializer(
            data=loadouts, many=True)
        serialized_loadouts.is_valid()
        return Response(serialized_loadouts.data)

    def post(self, request):
        serialized_data = PopulatedLoadoutSerializer(data=request.data)
        print(serialized_data)

        try:
            serialized_data.is_valid()
            serialized_data.save()
            return Response(serialized_data.data, status=status.HTTP_201_CREATED)

        except IntegrityError as error:
            return Response({"detail": str(error)}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

        except AssertionError as error:
            return Response({"detail": str(error)}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

        except:
            return Response({"detail": "Unprocessable Entity"}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class LoadoutDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get_loadout(self, pk):
        try:
            return Loadout.objects.get(pk=pk)

        except Loadout.DoesNotExist:
            raise NotFound(detail="Loadout Don't Exist")

    def get(self, _request, pk):
        loadout = self.get_loadout(pk)
        serialized_loadout = PopulatedLoadoutSerializer(loadout)
        return Response(serialized_loadout.data, status=status.HTTP_200_OK)

    def delete(self, _request, pk):
        loadout = self.get_loadout(pk)
        loadout.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        loadout_to_update = self.get_loadout(pk)
        serialized_loadout = LoadoutSerializer(
            loadout_to_update, data=request.data)
        print(loadout_to_update)
        print(serialized_loadout)
        try:
            serialized_loadout.is_valid()
            serialized_loadout.save()
            return Response(serialized_loadout.data, status=status.HTTP_202_ACCEPTED)
        except AssertionError as error:
            return Response({"detail": str(error)}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except:
            return Response({"detail": "Unprocessable Entity"}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
