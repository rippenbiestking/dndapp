from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets
from rest_framework.response import Response

# Create your views here.
class WorldView(viewsets.ModelViewSet):
    queryset = World.objects.all()
    serializer_class = WorldSerializer

class MapView(viewsets.ModelViewSet):
    queryset = Map.objects.all()
    serializer_class = MapSerializer

class TileView(viewsets.ModelViewSet):
    queryset = Tile.objects.all()
    serializer_class = TileSerializer