from .common import UserSerializer
from loadouts.serializers.populated import PopulatedLoadoutSerializer


class PopulatedUserSerializer(UserSerializer):
    loadouts = PopulatedLoadoutSerializer(many=True)
