from rest_framework import serializers
from ..models import Loadout


class LoadoutSerializer(serializers.ModelSerializer):
    # owner = serializers.StringRelatedField()
    # gunID = serializers.StringRelatedField()

    class Meta:
        model = Loadout
        fields = '__all__'
