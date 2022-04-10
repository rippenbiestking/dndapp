from rest_framework import filters
from django.contrib.gis.geos import Polygon

class ContainsFilter(filters.BaseFilterBackend):
    def filter_queryset(self, request, queryset, view):
        bb = request.query_params.get('bb', '').split(',')
        if len(bb) == 4:
            return queryset.filter(position__contained=Polygon.from_bbox(bb))
        return queryset

class MapFilter(filters.BaseFilterBackend):
    def filter_queryset(self, request, queryset, view):
        map_id = request.query_params.get('map', '')
        if map_id:
            return queryset.filter(parent_map__pk=int(map_id))
        return queryset