from django.http import JsonResponse
from api.models import Genre, Kino, genres, kinos
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.serializers import KinoSerializer


class KinoList(APIView):
    def get(self, request, *args, **kwargs):
        serializer = KinoSerializer(kinos(), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = KinoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class KinoDetail(APIView):
    def get_object(self, pk):
        try:
            return Kino.objects.get(pk=pk)
        except Kino.DoesNotExist as e:
            return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)

    def get(self, request, *args, **kwargs):
        pk = self.kwargs.get('pk')
        kino = self.get_object(pk)
        serializer = KinoSerializer(kino)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, *args, **kwargs):
        pk = self.kwargs.get('pk')
        kino = self.get_object(pk)
        serializer = KinoSerializer(kino, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request, *args, **kwargs):
        pk = self.kwargs.get('pk')
        kino = self.get_object(pk)
        kino.delete()
        return Response({'delete': True}, status=status.HTTP_202_ACCEPTED)