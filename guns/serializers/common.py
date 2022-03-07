from rest_framework import serializers
from ..models import Gun


class GunSerializer(serializers.ModelSerializer):
    attachmentsID = serializers.StringRelatedField(
        many=True, read_only=True)

    class Meta:
        model = Gun
        fields = '__all__'
