from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from django.conf import settings
from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied

from .serializers.common import UserSerializer
from datetime import datetime, timedelta

import jwt

User = get_user_model()

# Create your views here.


class RegisterView(APIView):

    def post(self, request):
        user_to_create = UserSerializer(data=request.data)
        print(user_to_create)
        try:
            user_to_create.is_valid()
            user_to_create.save()
            return Response(user_to_create.data, status=status.HTTP_201_CREATED)
        except:
            return Response("Failed to create user, are you a bot?!", status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class LoginView(APIView):

    def post(self, request):
        try:
            user_to_login = User.objects.get(
                username=request.data.get('username'))
        except User.DoesNotExist:
            return PermissionDenied(detail="Woah woah, who are you?")

        if not user_to_login.check_password(request.data.get('password')):
            return PermissionDenied(detail="Woah woah, who are you?")

        dt = datetime.now() + timedelta(microseconds=604800000000)

        token = jwt.encode({
            'sub': user_to_login.id,
            'exp': int(dt.strftime('%s'))
        }, settings.SECRET_KEY, 'HS256')

        return Response({
            'token': token,
            'message': f"Oh hi {user_to_login.username}"
        }, status.HTTP_202_ACCEPTED)
