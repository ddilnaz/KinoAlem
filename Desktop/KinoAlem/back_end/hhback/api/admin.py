from django.contrib import admin
from api.models import Genre, Kino,User,UserAndKino
# Register your models here.

@admin.register(Genre)
class GenreAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('name','password')
@admin.register(UserAndKino)
class UserAndKinoAdmin(admin.ModelAdmin):
    list_display = ('user_id','kino_id')

@admin.register(Kino)
class KinoAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description','genre')