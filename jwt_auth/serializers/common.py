from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from django.contrib.auth.hashers import make_password

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    loadouts = serializers.StringRelatedField(
        many=True, read_only=True)

    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)

    def validate(self, data):
        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')

        if password != password_confirmation:
            raise ValidationError(
                {'password_confirmation': 'All you gotta do is write the same thing twice'})
        data['password'] = make_password(password)
        return data

    class Meta:
        model = User
        fields = ("username", "email", "platform",
                  "password_confirmation", "password", "loadouts")
