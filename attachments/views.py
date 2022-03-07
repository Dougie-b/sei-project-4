from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import status

from .models import Attachment

from .serializers.common import AttachmentSerializer

# Create your views here.


class AttachmentListView(APIView):

    def get(self, _request):
        attachments = Attachment.objects.all()
        serialized_attachments = AttachmentSerializer(
            attachments, many=True)
        return Response(serialized_attachments.data, status=status.HTTP_200_OK)
