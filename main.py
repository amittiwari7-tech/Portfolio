import requests

url = "https://api.ipify.org"

ipaddress = requests.get(url).text

locationURL = f"https://ipinfo.io/{ipaddress}/json"

location = requests.get(locationURL).json()

latitude = location['loc'].split(",")[0]
longitude = location['loc'].split(",")[1]


aqiURL =f"https://api.waqi.info/feed/geo:{latitude};{longitude}/?token=4933595cbf578e2c7eb047df4cfb434dd7d4432a"

aqiData = requests.get(aqiURL).json()
aqiData = f"AQi At Your Current Location is {aqiData['data']['aqi']}"

print(aqiData)