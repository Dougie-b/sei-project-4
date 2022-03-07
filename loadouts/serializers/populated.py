from guns.models import Gun
from .common import LoadoutSerializer
from jwt_auth.serializers.common import UserSerializer
from guns.serializers.common import GunSerializer


class PopulatedLoadoutSerializer(LoadoutSerializer):
    gunID = GunSerializer()
    owner = UserSerializer()
