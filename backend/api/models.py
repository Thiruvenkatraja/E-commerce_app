from django.db import models

# Create your models here.
class Product(models.Model):
    ProductName = models.CharField(max_length=25)
    Price = models.DecimalField(max_digits=6, decimal_places=2)
    Description = models.TextField()
    Image = models.ImageField(upload_to='products/')

    def __str__(self):
        return self.ProductName
    

class Order(models.Model):
    CustomerName = models.CharField(max_length=25)
    CustomerEmail = models.EmailField()
    Product = models.ForeignKey(Product, on_delete=models.PROTECT)
    Date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.CustomerName} - {self.Product}"

