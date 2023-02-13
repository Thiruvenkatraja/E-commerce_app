from django.urls import path
from .views import UserAuthenticationView , UserRegistrationView

urlpatterns = [
    path("login", UserAuthenticationView.as_view()),
    path("signup", UserRegistrationView.as_view()),
]


