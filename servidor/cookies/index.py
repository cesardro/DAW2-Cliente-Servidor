#!C:\Users\zx21student278\AppData\Local\Microsoft\WindowsApps\python

from http import cookies
import CodigoHTML

coki = cookies.SimpleCookie()
coki["contador"] = 0

print(coki)

print("Content-Type: text/html\n")

# Inicio del código HTML
print(CodigoHTML.cabeceraHTML.format("Cookies", "Cookies"))

print('<a href="index.py">Enlace</a>')

# Fin del código HTML
print(CodigoHTML.finalHTML)
