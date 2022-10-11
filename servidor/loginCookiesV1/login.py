#!C:\Users\zx21student278\AppData\Local\Microsoft\WindowsApps\python

import cgi
import os
from http import cookies
import CodigoHTML

usuarios = {"pepe": ["1234", "asdf1234"], "maria": ["1111", "oinioh32145"]}

args = cgi.parse()
user = args['user'][0]
passwd = args['pass'][0]
estaDentro = False

if user in usuarios:
    if usuarios[user][0] == passwd:
        estaDentro = True

if estaDentro:
    coki = cookies.SimpleCookie()
    coki["SID"] = usuarios[user][1]
    print(coki)

print("Content-Type: text/html\n")

print(CodigoHTML.cabeceraHTML.format("CNI", "Entrada al CNI"))

if estaDentro:
    print("<h6 class='Display-6'>Estas dentro</h6>")

print(CodigoHTML.finalHTML)