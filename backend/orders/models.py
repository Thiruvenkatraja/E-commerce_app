from django.db import models
from inventory .models import Inventory
from product_and_category.models import Category

# Create your models here.


class Order(models.Model):
    CustomerName = models.CharField(max_length=25)
    ProductName = models.ForeignKey(Inventory, on_delete=models.PROTECT)
    Price = models.DecimalField(max_digits=6, decimal_places=2)
    Quantity = models.DecimalField(max_digits=6, decimal_places=2)
    Category = models.ForeignKey(Category, on_delete=models.PROTECT)
    DeliveryDate = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.CustomerName} - {self.Product}"
