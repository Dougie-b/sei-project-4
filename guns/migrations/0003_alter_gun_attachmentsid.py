# Generated by Django 4.0.3 on 2022-03-07 11:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('attachments', '0001_initial'),
        ('guns', '0002_remove_gun_attachmentsid_gun_attachmentsid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gun',
            name='attachmentsID',
            field=models.ManyToManyField(blank=True, default=None, related_name='guns', to='attachments.attachment'),
        ),
    ]