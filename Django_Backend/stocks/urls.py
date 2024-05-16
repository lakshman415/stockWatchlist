from django.urls import path
from .views import send_post_request, login_view, logout_view

urlpatterns = [
        path('login/', login_view, name='login'),
        path('logout/', logout_view, name='logout'),
        path('fetch-stock-data/', send_post_request, name='fetch_stock_data'),
    ]
