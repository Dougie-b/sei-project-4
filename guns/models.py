from django.db import models
from django.forms import CharField

# Create your models here.


class Gun(models.Model):
    name = models.CharField(max_length=30)
    type = models.CharField(max_length=20)
    image = models.CharField(max_length=500)
    attachmentsID = models.ManyToManyField(
        "attachments.Attachment",
        related_name='guns',
        default=None,
        blank=True
    )

    def __str__(self):
        return f"{self.name} - {self.attachmentsID.name}"
