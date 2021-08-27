from core.models import Contacts
from rest_framework import serializers

class ContactSerializers(serializers.ModelSerializer):
    """Serializer for Contact class"""
    
    class Meta:
        model = Contacts
        fields = ('id', 'first_name', 'last_name', 'email', 'message',)
        read_only_fields = ('id',)
    
    