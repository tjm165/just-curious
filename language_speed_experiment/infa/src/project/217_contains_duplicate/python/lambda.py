import json
from decimal import Decimal

def default(obj):
    if isinstance(obj, Decimal):
        return str(obj)
    raise TypeError("Object of type '%s' is not JSON serializable" % type(obj).__name__)

def containsDuplicate(nums):
    hashset = set()

    for n in nums:
        if n in hashset:
            return True
        hashset.add(n)
    return False

def lambda_handler(event, context):
    containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 9])

    return {
        'statusCode': 200,
        'body' : json.dumps({"message": "Hello from Python - Contains Duplicate"}, default=default)
    }