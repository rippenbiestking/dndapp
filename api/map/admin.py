from django.contrib import admin
from .models import World, Map, Tile

# Register your models here.
@admin.register(World)
class WorldAdmin(admin.ModelAdmin):
    pass

@admin.register(Map)
class MapAdmin(admin.ModelAdmin):
    pass

@admin.register(Tile)
class TileAdmin(admin.ModelAdmin):
    pass