import json
from decimal import Decimal

def default(obj):
    if isinstance(obj, Decimal):
        return str(obj)
    raise TypeError("Object of type '%s' is not JSON serializable" % type(obj).__name__)

def twoSum(nums, target):
    prevMap = {} 

    for i, n in enumerate(nums):
        diff = target - n
        if diff in prevMap:
            return [prevMap[diff], i]
        prevMap[n] = i

def lambda_handler(event, context):

    for _ in range(10000):
        continue

    return {
        'statusCode': 200,
        'body' : json.dumps({"message": "Hello from Python - Two Sum"}, default=default)
    }