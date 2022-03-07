from rest_framework.authentication import BasicAuthentication
from rest_framework.exceptions import PermissionDenied

from django.conf import settings
from django.contrib.auth import get_user_model

import jwt


User = get_user_model()

# Custom Authentication


class JWTAuthentication(BasicAuthentication):

    def authenticate(self, request):
        header = request.headers.get('Authorization')

        if not header:
            return None

        if not header.startswith('Bearer'):
            raise PermissionDenied(
                detail="mmm, not so sure about the format of that there token friend")

        token = header.replace('Bearer ', '')

        try:
            payload = jwt.decode(
                token, settings.SECRET_KEY, algorithms=['HS256'])
            user = User.objects.get(pk=payload.get('sub'))
        except jwt.exceptions.InvalidTokenError as error:
            print(error)
            raise PermissionDenied(detail="Dat token just ain't right")
        except User.DoesNotExist as error:
            print(error)
            raise PermissionDenied(
                detail="According to my records, you don't exist")
        return (user, token)
