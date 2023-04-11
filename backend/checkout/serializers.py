from rest_framework import serializers
from . models import Checkout
from cart.serializers import CartSerializerGet

class CheckoutSerializerPost(serializers.ModelSerializer):

    class Meta:
        model = Checkout
        fields = ['Cart','CustomerName','MobileNumber','DeliveryAddress','PaymentMode']

class CheckoutSerializerGet(serializers.ModelSerializer):
    Cart = CartSerializerGet()

    class Meta:
        model = Checkout
        fields = "__all__"
