# Generated by Django 4.0.3 on 2022-04-09 01:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0002_alter_map_parent_tile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='map',
            name='map_type',
            field=models.CharField(choices=[('W', 'World'), ('R', 'Region'), ('E', 'Encounter')], max_length=1),
        ),
    ]
