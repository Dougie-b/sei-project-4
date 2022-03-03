from tkinter import CASCADE
from django.db import models


# Create your models here.


class Loadout(models.Model):
    playstyle = models.CharField(max_length=20, default=None)
    owner = models.ManyToManyField(
        "jwt_auth.User",
        related_name="loadaouts",
    )
    gunID = models.ForeignKey(
        "guns.Gun",
        related_name="loadouts",
        on_delete=models.CASCADE
    )
