from django.db import models


# Create your models here.


class Loadout(models.Model):
    name = models.CharField(max_length=20, default=None)
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="loadouts",
        on_delete=models.CASCADE,
        default=1
    )
    gunID = models.ForeignKey(
        "guns.Gun",
        related_name="loadouts",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f"{self.name} - {self.gunID} "
