from django.contrib.auth.models import User
from django.db.models import Q
from django.contrib.auth import password_validation

from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['email', 'password', 'password2', ]
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['email'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    def validate_email(self, value):
        try:
            User.objects.get(Q(username=value) | Q(email=value))
        except:
            return value
        raise serializers.ValidationError('Email is already in use')

    def validate_password(self, value):
        password_validation.validate_password(value)
        return value
