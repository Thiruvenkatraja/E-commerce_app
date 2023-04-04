from django.db import models
# from inventory.models import Inventory

# Create your models here.


class Category(models.Model):
    Category = models.CharField(max_length=20)
    CategoryId = models.CharField(max_length=10)

    class Meta:
        verbose_name_plural = "Category"

    def __str__(self):
        return f" {self.Category}"

class Product(models.Model):
    ProductName = models.CharField(max_length=20)
    Price = models.DecimalField(max_digits=7,decimal_places=2)
    ProductId = models.CharField(max_length=10)
    Category = models.ForeignKey(Category, on_delete=models.PROTECT)
    ImageURL = models.ImageField(upload_to='products/', default=None)

    def __str__(self):
        return f"{self.ProductName}"



