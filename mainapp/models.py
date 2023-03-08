from django.db import models

# Create your models here.
class Game(models.Model):
    name = models.CharField(max_length=200)
    studio = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images')

    def __str__(self):
        return str(self.name)