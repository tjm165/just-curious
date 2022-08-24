from urllib2 import urlopen

url = "https://ufsjj3gw67.execute-api.us-east-2.amazonaws.com/python2"
resp = urlopen(url)
print(resp)