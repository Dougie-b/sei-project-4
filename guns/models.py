from tkinter import CASCADE
from django.db import models
from django.forms import CharField

# Create your models here.


class Gun(models.Model):
    name = models.CharField(max_length=30)
    type = models.CharField(max_length=20)
    image = models.CharField(max_length=500)
    attachmentsID = models.ForeignKey(
        "attachments.Attachment",
        related_name='guns',
        on_delete=models.CASCADE
    )
