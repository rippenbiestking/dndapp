# Generated by Django 4.0.3 on 2022-04-13 05:52

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0008_merge_0005_world_owner_0007_tile_position'),
    ]

    operations = [
        migrations.AlterField(
            model_name='map',
            name='size',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), blank=True, null=True, size=2),
        ),
    ]