from rest_framework import serializers
from ..models import Loadout


class LoadoutSerializer(serializers.ModelSerializer):

    class Meta:
        model = Loadout
        fields = '__all__'
