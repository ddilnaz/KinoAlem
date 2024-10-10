from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404, redirect, render

from .forms import ProfileForm
from .models import Follow, Profile


def register(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            # Create a Profile for the new user
            Profile.objects.create(user=user)
            username = form.cleaned_data.get("username")
            raw_password = form.cleaned_data.get("password1")
            # Log the user in
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect("blog:post_list")
    else:
        form = UserCreationForm()
    return render(request, "users/registration.html", {"form": form})


def profile_view(request, username):
    user = get_object_or_404(User, username=username)
    profile = user.profile
    is_following = False
    if request.user.is_authenticated:
        is_following = Follow.objects.filter(
            follower=request.user, following=user
        ).exists()
    followers_count = user.followers_set.count()
    following_count = user.following_set.count()
    return render(
        request,
        "users/profile.html",
        {
            "profile_user": user,
            "profile": profile,
            "is_following": is_following,
            "followers_count": followers_count,
            "following_count": following_count,
        },
    )


@login_required
def edit_profile(request):
    profile = request.user.profile
    if request.method == "POST":
        form = ProfileForm(request.POST, request.FILES, instance=profile)
        if form.is_valid():
            form.save()
            return redirect("users:profile", username=request.user.username)
    else:
        form = ProfileForm(instance=profile)
    return render(request, "users/edit_profile.html", {"form": form})


@login_required
def follow_user(request, username):
    user_to_follow = get_object_or_404(User, username=username)
    if user_to_follow != request.user:
        Follow.objects.get_or_create(follower=request.user, following=user_to_follow)
    return redirect("users:profile", username=username)


@login_required
def unfollow_user(request, username):
    user_to_unfollow = get_object_or_404(User, username=username)
    Follow.objects.filter(follower=request.user, following=user_to_unfollow).delete()
    return redirect("users:profile", username=username)