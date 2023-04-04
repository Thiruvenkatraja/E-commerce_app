from django.urls import path
from .views import OrderView

urlpatterns = [
    path("order/", OrderView.as_view()),
    path("order/<int:id>/update", OrderView.as_view()),
    path("order/<int:id>/delete", OrderView.as_view()),

]
