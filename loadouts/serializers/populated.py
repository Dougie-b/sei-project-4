from .common import LoadoutSerializer
from jwt_auth.serializers.common import UserSerializer


class PopulatedLoadoutSerializer(LoadoutSerializer):
    owner = UserSerializer()
