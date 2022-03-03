from django.db import models

# Create your models here.


class Attachment(models.Model):
    name = models.CharField(max_length=50)
    slot = models.CharField(max_length=15)
