from rest_framework.response import Response
from .serializers import ProductSerializer
from .models import Product
from rest_framework.views import APIView
# Create your views here.


class ProductView (APIView):
    serializer_class = ProductSerializer

    def get(self, request, id=None, *args, **kwargs):
        if id:
            data = Product.objects.get(id=id)
            serializer = ProductSerializer(data)
        else:
            data = Product.objects.all()
            serializer = ProductSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = ProductSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Data is Successfully saved", "data": serializer.data})

    def put(self, request, id, *args, **kwargs):
        data = request.data
        ProductData = Product.objects.get(id=id)
        serializer = ProductSerializer(instance=ProductData, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Data is Successfully Updated", "data": serializer.data})

    def delete(self, request, id, *args, **kwargs):
        ProductData = Product.objects.filter(id=id)
        ProductData.delete()
        return Response({"Response": "Data is Successfully Deleted"})


