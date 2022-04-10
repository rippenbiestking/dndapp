# Generated by Django 4.0.3 on 2022-04-10 01:43

import django.contrib.gis.db.models.fields
from django.db import migrations
from django.contrib.gis.geos import Point


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0006_remove_tile_position'),
    ]

    operations = [
        migrations.AddField(
            model_name='tile',
            name='position',
            field=django.contrib.gis.db.models.fields.PointField(default=Point(0,0), srid=4326),
            preserve_default=False,
        ),
    ]
