from django.urls import path
from .views import InventoryView
urlpatterns = [
    path("product/", InventoryView.as_view()),
    path("product/<int:id>/update", InventoryView.as_view()),
    path("product/<int:id>/delete", InventoryView.as_view()),
]
