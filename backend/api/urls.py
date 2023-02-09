from django.urls import path
from .views import ProductView, OrderView
urlpatterns = [
    path("product", ProductView.as_view()),
    path("order", OrderView.as_view()),

]
