from django.db import models

class Contacts(models.Model):
    """Creating records for public to contact me"""
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255, blank=True)
    email = models.EmailField()
    message = models.CharField(max_length=2000)
