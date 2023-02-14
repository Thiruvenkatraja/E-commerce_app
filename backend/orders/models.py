from django.db import models
from inventory .models import Product

# Create your models here.


class Order(models.Model):
    CustomerName = models.CharField(max_length=25)
    CustomerEmail = models.EmailField()
    Product = models.ForeignKey(Product, on_delete=models.PROTECT)
    Date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.CustomerName} - {self.Product}"
