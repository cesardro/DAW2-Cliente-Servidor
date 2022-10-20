#!C:\Users\zx21student278\AppData\Local\Microsoft\WindowsApps\python

import cgi
from genericpath import exists
import json
import os.path

print("Content-Type: text/plain\n")

args = cgi.parse()

datos = []

datos.append(args["name"][0])
datos.append(args["pswd"][0])
datos.append(args["email"][0])

bandera = True

if(os.path.exists("datos/listado.json")):

    f = open("datos/listado.json", "rt")
    datosEnJson = json.loads(f.read())
    f.close()

    datosEnJson.append(datos)
    f = open("datos/listado.json", "wt")
    f.write(json.dumps(datosEnJson))
    f.close()

else:

    f = open("datos/listado.json", "wt")
    f.write("[")
    f.write(json.dumps(datos))
    f.write("]")
    f.close()