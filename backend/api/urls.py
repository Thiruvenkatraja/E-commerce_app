from django.urls import path
from .views import ProductView, OrderView
urlpatterns = [
    path("product", ProductView.as_view()),
    path("order", OrderView.as_view()),
    path("product/<int:id>/update", ProductView.as_view()),
    path("product/<int:id>/delete", ProductView.as_view()),
    path("order/<int:id>/update", OrderView.as_view()),
    path("order/<int:id>/delete", OrderView.as_view()),



]
