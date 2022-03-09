from email.policy import default
from django.db import models

# Create your models here.


class Attachment(models.Model):
    name = models.CharField(max_length=50)
    slot = models.CharField(max_length=15)

    def __str__(self):
        return f"{self.name} - {self.slot}"
