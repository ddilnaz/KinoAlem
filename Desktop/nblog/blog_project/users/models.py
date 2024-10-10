from django.contrib.auth.models import User
from django.db import models


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    bio = models.TextField(blank=True)
    profile_picture = models.ImageField(upload_to="profile_pics/", blank=True, null=True)

    def __str__(self):
        return f"{self.user.username} Profile"


class Follow(models.Model):
    follower = models.ForeignKey( User, on_delete=models.CASCADE, related_name="following_set" )
    following = models.ForeignKey(     User, on_delete=models.CASCADE, related_name="followers_set" )
    
    class Meta:
        unique_together = ("follower", "following")

    def __str__(self):
        return f"{self.follower.username} follows {self.following.username}"