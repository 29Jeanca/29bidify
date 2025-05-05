from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import UserProfile

class CreateUserView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')
        phone_number = request.data.get('phone_number', '')
        address = request.data.get('address', '')

        if not username or not password or not email:
            return Response({"error": "Username, password, and email are required."}, status=400)

        if User.objects.filter(username=username).exists():
            return Response({"error": "Username already exists."}, status=400)

        if User.objects.filter(email=email).exists():
            return Response({"error": "Email already exists."}, status=400)

        user = User.objects.create_user(
            username=username,
            password=password,
            email=email
        )

       
        UserProfile.objects.create(
            user=user,
            phone_number=phone_number,
            address=address
        )

        return Response({"message": "User created successfully."}, status=201)
