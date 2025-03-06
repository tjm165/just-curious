# Notes

```
-> 127.0.0.1

PING 127.0.0.1 (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.205 ms
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.172 ms
64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.556 ms
64 bytes from 127.0.0.1: icmp_seq=3 ttl=64 time=0.610 ms
--- 127.0.0.1 ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max/stddev = 0.172/0.386/0.610/0.199 ms
```

```
-> 127.0.0.1 && echo hello world

PING 127.0.0.1 (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.131 ms
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.211 ms
64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.314 ms
64 bytes from 127.0.0.1: icmp_seq=3 ttl=64 time=0.149 ms
--- 127.0.0.1 ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max/stddev = 0.131/0.201/0.314/0.072 ms
hello world
```

```
-> 127.0.0.1 && whoami

www-data
```

Looks like the user running this web service is `www-data`

```
-> 127.0.0.1 && hostname

PING 127.0.0.1 (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.126 ms
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.169 ms
64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.385 ms
64 bytes from 127.0.0.1: icmp_seq=3 ttl=64 time=0.340 ms
--- 127.0.0.1 ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max/stddev = 0.126/0.255/0.385/0.110 ms
7bae5b313a0a
```
