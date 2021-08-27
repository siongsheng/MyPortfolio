from django.urls import path, include
from rest_framework.routers import DefaultRouter as Router
from contact import views

router = Router()
router.register('', views.ContactViewSet)

urlpatterns = [
    path('', include(router.urls)),
]