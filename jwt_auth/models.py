from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    username = models.CharField(max_length=30, unique=True)
    email = models.CharField(max_length=50, unique=True)
    platform = models.CharField(max_length=15)

    def __str__(self):
        return f"{self.username} - {self.platform}"
