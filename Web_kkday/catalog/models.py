from django.db import models

class Data(models.Model):
    no = models.IntegerField(primary_key=True)
    # models.IntegerField()
    qty = models.IntegerField()
    prod_desc = models.TextField()
    order_crtdate = models.CharField(max_length = 20)
    price_total = models.FloatField()
    rs = models.IntegerField()
    is_3d = models.TextField()
    #def __str__(self):
        #"""String for representing the Model object."""
    #    return self.prod_desc