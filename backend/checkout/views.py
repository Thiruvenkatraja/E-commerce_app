from django.shortcuts import render
from . serializers import CheckoutSerializerPost,CheckoutSerializerGet
from . models import Checkout
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

# Create your views here.

class CheckoutView(APIView):
    serializer_class = CheckoutSerializerPost
    permission_classes = [IsAuthenticated]

    def get(self, request, id=None, *args, **kwargs):
        if id:
            data = Checkout.objects.get(id=id)
            serializer = CheckoutSerializerGet(data)
        else:
            data = Checkout.objects.all()
            serializer = CheckoutSerializerGet(data, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = CheckoutSerializerPost(data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Data is Successfully saved", "data": serializer.data})

    def put(self, request, id, *args, **kwargs):
        data = request.data
        CheckoutData = Checkout.objects.get(id=id)
        serializer = CheckoutSerializerPost(
            instance=CheckoutData, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Data is Successfully Updated", "data": serializer.data})

    def delete(self, request, id, *args, **kwargs):
        CheckoutData = Checkout.objects.filter(id=id)
        CheckoutData.delete()
        return Response({"Response": "Data is Successfully Deleted"})