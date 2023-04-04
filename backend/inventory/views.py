from rest_framework.response import Response
from .serializers import InventorySerializer
from .models import Inventory
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
# Create your views here.


class InventoryView (APIView):
    serializer_class = InventorySerializer
    permission_classes=[IsAuthenticated]

    def get(self, request, id=None, *args, **kwargs):
        if id:
            data = Inventory.objects.get(id=id)
            serializer = InventorySerializer(data)
        else:
            data = Inventory.objects.all()
            serializer = InventorySerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = InventorySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Data is Successfully saved", "data": serializer.data})

    def put(self, request, id, *args, **kwargs):
        data = request.data
        ProductData = Inventory.objects.get(id=id)
        serializer = InventorySerializer(instance=ProductData, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Data is Successfully Updated", "data": serializer.data})

    def delete(self, request, id, *args, **kwargs):
        ProductData = Inventory.objects.filter(id=id)
        ProductData.delete()
        return Response({"Response": "Data is Successfully Deleted"})


