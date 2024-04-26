from django.db import models

# Create your models here.
def genres():
    return Genre.objects.all()
def kinos():
    return Kino.objects.all()


class Genre(models.Model):
    name = models.CharField(max_length=255)
    class Meta:
        verbose_name = "Genre"
        verbose_name_plural = "Genres"

class Kino(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    direction = models.TextField()
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Kino"
        verbose_name_plural = "Kinos"

    def __str__(self):
        return f"{self.name}:{self.genre}"
    
class User(models.Model):
    name=models.CharField(max_length=25,primary_key=True)
    password=models.CharField(max_length=255)
    kinos = models.ManyToManyField(Kino)
    class Meta:
        verbose_name = "Users"

class UserAndKino(models.Model):
    kino_id = models.CharField(max_length=255)
    user_id = models.CharField(max_length=255)
    class Meta:
        verbose_name = "Actions"
