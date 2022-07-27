from collections import defaultdict
import sys
import requests
import collections

iterations = int(sys.argv[1])
resp_codes = collections.defaultdict(lambda: 0)

for i in range(iterations):
    url = "https://ufsjj3gw67.execute-api.us-east-2.amazonaws.com/python1"
    resp = requests.get(url)
    resp_codes[resp.status_code] += 1
    print(i)

print("-----")
print(resp_codes)