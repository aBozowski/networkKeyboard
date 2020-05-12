# Network Keyboard 

## Demo

* https://imgur.com/0erzygn

## About

* [reddit thread](https://www.reddit.com/r/badUIbattles/comments/gf9sk3/using_http_requests_to_different_ascii_encoded_in/?utm_source=share&utm_medium=web2x)
* Switched it to use ports. (only ports, not ports __and__ ip).
* Type on a web page by making HTTP reqs to different ports.
* There is a random maping of ports to the first 128 ascii codes.

## Install and run

```
$ git clone https://github.com/aBozowski/networkKeyboard
$ cd networkKeyboard
$ npm install
$ npm start
```

* Running at ```127.0.0.1:8080```
* Check the console for the port mappings like this
```
Character a listening on port 42993
Character b listening on port 35623
Character c listening on port 42879
...
Character y listening on port 46187
Character z listening on port 39873
```
* Open a new page at ```http://127.0.0.1:8080/``` and wait for input
* Make ```GET``` requests to ```http://127.0.0.1:PORT_MAPPED_TO_CHAR``` and the corresponding character will show up on the page.
* You can also get the port mapping by making a ```GET``` request to ```http://127.0.0.1:8080/internal/broadcast```

## Test with the python client

```
py/$ python3.7 pyclient.py 
Input the text you would like to display on the port keybaord
This is the worst way to type possible
request for char: T to target: http://127.0.0.1:40957
request for char: h to target: http://127.0.0.1:39733
request for char: i to target: http://127.0.0.1:32949
request for char: s to target: http://127.0.0.1:36795
request for char:   to target: http://127.0.0.1:45637
request for char: i to target: http://127.0.0.1:32949
...
```

## To Do
* Clean up this awful code
