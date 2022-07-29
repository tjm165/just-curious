import collections
import sys
import requests
import collections
import multiprocessing

iterations = int(sys.argv[1])
resp_codes = collections.defaultdict(lambda: 0)

def run(param):
    i = param['i']
    url = param['url']
    print("Starting the process with id: {} on url {}".format(i, url))
    # url = "https://ufsjj3gw67.execute-api.us-east-2.amazonaws.com/python1"
    resp = requests.get(url)
    resp_codes[resp.status_code] += 1
    print("id: {} - code {} - message {}".format(i, resp.status_code, resp.json()['message']))

if __name__ == '__main__':
    pool = multiprocessing.Pool()
    pool = multiprocessing.Pool(processes=iterations)
    params = []
    for i in range(iterations):
        param = {}
        param['i'] = i
        param['url'] = "https://ufsjj3gw67.execute-api.us-east-2.amazonaws.com/python1"
        params.append(param)

    for i in range(iterations, iterations * 2):
        param = {}
        param['i'] = i
        param['url'] = "https://ufsjj3gw67.execute-api.us-east-2.amazonaws.com/go2"
        params.append(param)

    pool.map(run, params)
    print("-----")
    print(resp_codes)