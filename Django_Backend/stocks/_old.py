# stocks/views.py

from django.http import JsonResponse
import requests

def fetch_stock_data(request):
    symbol = request.GET.get('symbol', 'IBM')  # Default to IBM if symbol is not provided
    interval = request.GET.get('interval', '5min')  # Default interval to 5 minutes
    api_key = '4R30R8Z3GE1MMWQL'
    
    url = f"https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={symbol}&interval={interval}&apikey={api_key}"
    
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        return JsonResponse(data)
    else:
        return JsonResponse({'error': 'Failed to fetch data'}, status=500)
