#!C:\Users\zx21student278\AppData\Local\Microsoft\WindowsApps\python

import cgi
from genericpath import exists
import json
import os.path
import codigoHTML
import hashlib
import mysql.connector

mydb = mysql.connector.connect(
    host='localhost',
    user='logRegConBD',
    password='logRegConBD',
    database='logRegConBD'
)

print("Content-Type: text/html\n")

args = cgi.parse()

datos = []

proceder = False

mycursor = mydb.cursor()

try:
    name = args['name'][0]
    # Encriptado de contraseñas
    pswd = hashlib.sha512(str.encode(args["pswd"][0]))
    pswd = (pswd.hexdigest())
    email = args['email'][0]

    mycursor.execute("SELECT * FROM logRegConBD where = '", name, "'")

    myresult = mycursor.fetchall()

    if not myresult:
        sql = 'INSERT INTO logregcondb (name, pswd, email, admin) VALUES (', name, pswd, email, 1, ')'


except:
    print(codigoHTML.cabeceraHTML.format("",
          '<meta http-equiv="Refresh" content="0; URL=../error.html"/>', ""))
    print(codigoHTML.finalHTML)
