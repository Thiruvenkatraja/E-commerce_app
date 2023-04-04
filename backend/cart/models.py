from django.db import models
from product_and_category.models import Product
# Create your models here.

class Cart(models.Model):
    ProductId = models.ForeignKey(Product, on_delete=models.PROTECT)
    Quantity = models.IntegerField()

    def __str__(self):
        return f"{self.ProductId}"
