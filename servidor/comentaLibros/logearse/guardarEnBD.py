#!C:\Users\zx21student278\AppData\Local\Microsoft\WindowsApps\python

import cgi
import os
from http import cookies
import codigoHTML
import mysql.connector

estasDentro = False

args = cgi.parse()
titulo = args["titulo"][0]
autor = args["autor"][0]
comentario = args["comentario"][0]
imagen = args["imagen"][0]

mydb = mysql.connector.connect(
    host='localhost',
    user='comentaLibro',
    password='comentaLibro',
    database='comentaLibro'
)

mycursor = mydb.cursor()

mycursor.execute("SELECT usuario FROM usuarios")
myresult = mycursor.fetchall()

todasCokis = {}  # diccionario vacio
if 'HTTP_COOKIE' in os.environ:
    listaCoki = os.environ['HTTP_COOKIE']
    listaCoki = listaCoki.split(';')

    for elemCoki in listaCoki:
        (nombre, valor) = elemCoki.split('=')
        todasCokis[nombre] = valor

coki = cookies.SimpleCookie()
name = ''

if 'SID' in todasCokis:
    for datos in myresult:
        if (datos[0] == todasCokis['SID']):
            proceder = True
            name = datos[0]

mycursor.execute("SELECT id FROM usuarios WHERE usuario='" + name + "';")
myresult = mycursor.fetchall()

sql = "INSERT INTO comentarios (titulo, autor, comentario, usuarioId, imagen) VALUES (%s, %s, %s, %s, %s)"
val = (titulo, autor, comentario, myresult[0][0], imagen)
mycursor.execute(sql, val)
mydb.commit()

print("Content-Type: text/html\n")

print(codigoHTML.cabeceraHTML.format("Posteando tu critica",
      '<meta http-equiv="Refresh" content="2; URL=interfaz.py"/>', "Posteando tu critica. Redirigiendo", "", ""))
print(codigoHTML.finalHTML)
