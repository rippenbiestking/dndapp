# Tells Python how to turn models into JSONs
from django.contrib.gis.geos import Point
from rest_framework import serializers
from .models import *

class PointField(serializers.Field):
    def to_representation(self, value):
        return value.coords
    
    def to_internal_value(self, data):
        return Point(data[0], data[1])

class WorldSerializer(serializers.ModelSerializer):
    class Meta:
        model = World
        fields = '__all__'
        
    def create(self, validated_data):
        world = World.objects.create(
            name = validated_data['name'],
            owner = validated_data['owner'],
        )
        return world

class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Map
        fields = '__all__'

class TileSerializer(serializers.ModelSerializer):
    position = PointField()

    class Meta:
        model = Tile
        fields = '__all__'