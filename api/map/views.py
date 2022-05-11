from .filters import ContainsFilter, MapFilter, WorldFilter
from .models import *
from .serializers import *
from rest_framework import viewsets

# Create your views here.
class WorldView(viewsets.ModelViewSet):
    queryset = World.objects.all()
    serializer_class = WorldSerializer

    def create(self, request):
        request.data['owner'] = request.user.id
        return super().create(request)

class MapView(viewsets.ModelViewSet):
    queryset = Map.objects.all()
    serializer_class = MapSerializer
    filter_backends = [WorldFilter, ]

class TileView(viewsets.ModelViewSet):
    queryset = Tile.objects.all()
    serializer_class = TileSerializer
    filter_backends = [ContainsFilter, MapFilter, ]