import email
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    gamertag = models.CharField(max_length=30, unique=True)
    email = models.CharField(max_length=50, unique=True)
    platform = models.CharField(max_length=15)
