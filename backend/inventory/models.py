from django.db import models

# Create your models here.
class Product(models.Model):
    ProductName = models.CharField(max_length=25)
    Price = models.DecimalField(max_digits=6, decimal_places=2)
    Description = models.TextField()
    Image = models.ImageField(upload_to='products/')

    def __str__(self):
        return self.ProductName
    

