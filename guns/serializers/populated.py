from jwt_auth.serializers.common import UserSerializer
from .common import GunSerializer
from attachments.serializers.common import AttachmentSerializer


class PopulatedGunSerializer(GunSerializer):
    attachmentsID = AttachmentSerializer()
    owner = UserSerializer()
