from django.urls import path
from .views import CartView

urlpatterns =[
    path("cart/<int:id>", CartView.as_view()),
    path("cart/<int:id>/update", CartView.as_view()),
    path("cart/<int:id>/delete", CartView.as_view())
]