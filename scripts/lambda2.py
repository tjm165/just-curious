import json
from decimal import Decimal

def default(obj):
    if isinstance(obj, Decimal):
        return str(obj)
    raise TypeError("Object of type '%s' is not JSON serializable" % type(obj).__name__)

def lambda_handler(event, context):
    my_dict = {
        1: "Hi this is a dict inside Python2!",
        2: [

        ]
    }

    resp = {
        "message": "Hi this is Python2!" + my_dict[1] ,
    }

    return {
        'statusCode': 200,
        'body' : json.dumps(resp, default=default)
    }