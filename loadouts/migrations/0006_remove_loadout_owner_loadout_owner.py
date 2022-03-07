# Generated by Django 4.0.3 on 2022-03-07 11:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('loadouts', '0005_rename_custom_gun_loadout_gunid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='loadout',
            name='owner',
        ),
        migrations.AddField(
            model_name='loadout',
            name='owner',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='loadouts', to=settings.AUTH_USER_MODEL),
        ),
    ]
