from api.models import Genre, Kino, genres, kinos,User,UserAndKino
from api.serializers import GenreSerializer, KinoSerializer,UserSerializer,UserAndKinoSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework import generics, status
from django.shortcuts import get_object_or_404
@api_view(['POST'])
def addKinoToUser(request):  
    serializer = UserAndKinoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(
            {'status': 'created'},
            status=status.HTTP_201_CREATED
        )
    return Response(
            {'status': 'bad request'},
            status=status.HTTP_400_BAD_REQUEST
        )
@api_view(['POST'])
def create_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(
            {'data': serializer.data},
            status=status.HTTP_201_CREATED
        )

    return Response(
        {'data': serializer.errors},
        status=status.HTTP_400_BAD_REQUEST
    )
@api_view(['POST','DELETE'])
def getUserKinos(request):
    serializer = UserAndKinoSerializer(data=request.data)
    if serializer.is_valid():
        userkinos=UserAndKino.objects.all()
        kinos=Kino.objects.all()
        arr=[]
        for i in userkinos:

            if i.user_id==serializer.data['user_id']:
                
                for v in kinos:
                    if str(v.id)==i.kino_id:
                        arr.append(v)
        serialize1r = KinoSerializer(arr, many=True)
        return Response(serialize1r.data   )
  


@api_view(['GET', 'PUT', 'DELETE'])
def get_genre(request, genre_id):
    try:
        genre = Genre.objects.get(pk=genre_id)
    except Genre.DoesNotExist as e:
        return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)
    if request.method == "GET":
        serializer = GenreSerializer(genre)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "PUT":
        genre = Genre.objects.get(pk=genre_id)
        serializer = GenreSerializer(instance=genre, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        genre.delete()
        return Response({"deleted": True}, status=status.HTTP_202_ACCEPTED)


@api_view(['GET', 'POST'])
def get_genres(request):
    if request.method == "GET":
        serializer = GenreSerializer(genres(), many=True)
        return Response(serializer.data)
    if request.method == "POST":
        serializer = GenreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def kinos_by_genre(request, genre_id):
    genre = Genre.objects.get(pk=genre_id)
    kinos_ = [v for v in kinos() if v.kino.name == kino.name]
    serializer = KinoSerializer(kinos_, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

