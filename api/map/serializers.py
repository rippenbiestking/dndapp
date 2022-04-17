# Tells Python how to turn models into JSONs
from rest_framework import serializers
from .models import *

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
    position = serializers.SerializerMethodField()

    class Meta:
        model = Tile
        fields = '__all__'

    def get_position(self, obj):
        return obj.position.coords