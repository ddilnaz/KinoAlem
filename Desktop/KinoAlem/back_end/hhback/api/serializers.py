from rest_framework import serializers
from api.models import Genre, Kino,UserAndKino
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'token')

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, user):
        refresh = RefreshToken.for_user(user)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
            instance.save()
            return instance

class GenreSerializer(serializers.Serializer):
    id = serializers.ReadOnlyField()
    name = serializers.CharField()

    def create(self, validated_data):
        genre = Genre.objects.create(**validated_data)
        return genre

    def update(self, instance, validated_data):
        instance.id = instance.id
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance
    

class KinoSerializer(serializers.ModelSerializer):
    genre = serializers.SlugRelatedField(queryset=Genre.objects.all(), slug_field='name')

    class Meta:
        model = Kino
        fields = ('id', 'name', 'description', 'genre')
        read_only_field = ['id']

class UserAndKinoSerializer(serializers.ModelSerializer):
    user_id=  serializers.CharField()
    kino_id = serializers.CharField()
    class Meta:
        model = UserAndKino
        fields = ('user_id', 'kino_id')