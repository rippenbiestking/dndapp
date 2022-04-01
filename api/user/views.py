from django.contrib.auth.models import User

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import UserSerializer


@api_view(['POST'])
def register(request):
    user_data = UserSerializer(data=request.data)
    user_data.is_valid(raise_exception=True)
    user = user_data.save()
    refresh = RefreshToken.for_user(user)

    return Response({
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    })