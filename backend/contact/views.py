from rest_framework import viewsets, mixins
from core.models import Contacts
from .serializers import ContactSerializers
from django.core.mail import send_mail
from django.conf import settings
import sys
sys.path.append("..")
from credientials import my_email

class ContactViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin, mixins.ListModelMixin):
    """Manage contacts in the database"""
    queryset = Contacts.objects.all()
    serializer_class = ContactSerializers
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            first_name = serializer.validated_data["first_name"]
            last_name = serializer.validated_data["last_name"]
            email = serializer.validated_data["email"]
            message = serializer.validated_data["message"]
            send_mail(
                subject=(f'{first_name} {last_name} has sent you a message through your portfolio website!'),
                message=f"{message}\n\nEmail: " + email,
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[my_email],
                fail_silently=False
            )
        return super().perform_create(serializer)
    