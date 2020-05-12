# Python 3.7.3
import requests
from time import sleep


def get_headers():
    return requests.get('http://127.0.0.1:8080/internal/broadcast').json()


PORT_MAP = get_headers()
DRAMA_FACTOR = 1


def main():
    totype = input('Input the text you would like to display on the port keybaord\n')
    for char in totype:
        charcode = str(ord(char))
        if charcode in PORT_MAP:
            target = 'http://127.0.0.1:'+str(PORT_MAP[charcode])
            print('request for char: '+char+' to target: '+target)
            requests.get(target)
        else:
            print('skipping character that has no listerner: '+char)
        sleep(DRAMA_FACTOR) # Sleep for drama


if __name__ == '__main__':
    main()
