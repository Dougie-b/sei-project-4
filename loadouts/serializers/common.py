from rest_framework import serializers
from ..models import Loadout


class LoadoutSerializer(serializers.ModelSerializer):

    class Meta:
        model = Loadout
        fields = ("owner", "name", "gunID")
