from django.shortcuts import render
from . serializers import CartSerializerPost, CartSerializerGet
from . models import Cart
from . models import Product
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

# Create your views here.


class CartView(APIView):
    serializer_class = CartSerializerPost
    permission_classes = [IsAuthenticated]

    def get(self, request, id=None, *args, **kwargs):
        if id:
            data = Cart.objects.get(id=id)
            serializer = CartSerializerGet(data)
        else:
            data = Cart.objects.all()
            serializer = CartSerializerGet(data, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = CartSerializerPost(data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Data is Successfully saved", "data": serializer.data})

    def put(self, request, id, *args, **kwargs):
        data = request.data
        CategoryData = Cart.objects.get(id=id)
        serializer = CartSerializerPost(
            instance=CategoryData, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Data is Successfully Updated", "data": serializer.data})

    def delete(self, request, id, *args, **kwargs):
        ProductData = Cart.objects.filter(id=id)
        ProductData.delete()
        return Response({"Response": "Data is Successfully Deleted"})
