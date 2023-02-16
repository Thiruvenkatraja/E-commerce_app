from django.urls import path
from .views import ProductView
urlpatterns = [
    path("product", ProductView.as_view()),
    path("product/<int:id>/update", ProductView.as_view()),
    path("product/<int:id>/delete", ProductView.as_view()),
]
