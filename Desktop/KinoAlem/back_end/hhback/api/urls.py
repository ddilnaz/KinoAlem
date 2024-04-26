from django.urls import path
from api import views
from .views import KinoList, KinoDetail
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('genres/', views.get_genres),
    path('genres/<int:genre_id>', views.get_genre),
    path('genres/<int:genre_id>/kinos', views.kinos_by_genre),
    path('kinos/add', views.addKinoToUser),
    path('kinos/', KinoList.as_view()),
    path('userkinos/', views.getUserKinos),
    path('kinos/<int:pk>', KinoDetail.as_view()),
    path('user/create/', views.create_user, name='create_user'),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair')
]