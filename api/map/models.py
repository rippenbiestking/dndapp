from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class World(models.Model):
    name = models.CharField(max_length=16)

    def __str__(self):
        return self.name

class Map(models.Model):
    name = models.CharField(max_length=16)
    world = models.ForeignKey(World, on_delete = models.CASCADE)
    size = ArrayField(
        models.IntegerField(),
        size = 2
    )
    MAP_TYPE_CHOICES = [('W','World'), ('R','Region'), ('E','Encounter')]
    map_type = models.CharField(max_length=1, choices = MAP_TYPE_CHOICES)
    parent_tile = models.OneToOneField('Tile', on_delete = models.CASCADE, blank = True, null = True)

    def __str__(self):
        return self.name

class Tile(models.Model):
    parent_map = models.ForeignKey(Map, on_delete = models.CASCADE)
    position = ArrayField(
        models.IntegerField(),
        size = 2
    )
    BIOME_CHOICES = [('D','Desert'), ('G','Grassland'), ('O','Ocean')]
    biome = models.CharField(max_length = 1, choices = BIOME_CHOICES)
    TERRAIN_CHOICES = [('F','Forest'), ('M','Mountain')]
    terrain = models.CharField(max_length = 1, choices = TERRAIN_CHOICES, blank = True, null = True)
    HAB_CHOICES = [('T','Town')]
    habitation = models.CharField(max_length = 1, choices = HAB_CHOICES, blank = True, null = True)