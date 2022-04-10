# Tells Python how to turn models into JSONs
from rest_framework import serializers
from .models import *

class WorldSerializer(serializers.ModelSerializer):
    class Meta:
        model = World
        fields = '__all__'

class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Map
        fields = '__all__'

class TileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tile
        fields = '__all__'