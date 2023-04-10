from rest_framework import serializers
from . models import Cart
from product_and_category.serializers import ProductSerializer
from product_and_category.models import Product


class CartSerializerPost(serializers.ModelSerializer):

    class Meta:
        model = Cart
        fields = ["Quantity", "Product"]


class CartSerializerGet(serializers.ModelSerializer):
    Product = ProductSerializer()

    class Meta:
        model = Cart
        fields = "__all__"