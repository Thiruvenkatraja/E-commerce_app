from rest_framework.response import Response
from .serializers import ProductSerializer, OrderSerializer
from .models import Product, Order
from rest_framework.views import APIView
from django.http import JsonResponse
# Create your views here.


class ProductView (APIView):
    serializer_class = ProductSerializer

    def get(self, request, *args, **kwargs):
        data = Product.objects.all()
        serializer = ProductSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = ProductSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Data is Successfully saved", "data":serializer.data})


class OrderView (APIView):
    serializer_class = OrderSerializer

    def get(self, request, *args, **kwargs):
        data = Order.objects.all()
        serializer = OrderSerializer(data, many=True)
        return Response(data)

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = OrderSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Data is Successfully saved", "data": serializer.data})
