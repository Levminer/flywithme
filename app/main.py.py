import string
from turtle import textinput
from typing import Counter
import inquirer
import mysql.connector
from tabulate import tabulate
import pwinput
from passlib.hash import argon2


pocak = "$argon2id$v=19$m=65536,t=3,p=4$9Z5zztkbA4AQgvBeS6k1Bg$MVvROeZxRYhjBeSktrUjkDKvdSMCraI9MgfPGo4Bytk"
password = pwinput.pwinput(prompt="Adja meg az adatbázis jelszavát: ")
h=argon2.hash(password)
ok = False
while not ok:
    r = argon2.verify(password, pocak)
    if r:
        ok = True
    else:
        password = pwinput.pwinput(prompt="Adja meg az adatbázis jelszavát: ")
        ok = False

def sql():
    mydb = mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password="12345678",
        database="repulok"
    )
    mycursor=mydb.cursor()
    mycursor.execute("SELECT * from repulo")
    myresult=mycursor.fetchall()

    header =["ID", "Repülő Gyártója","Típusa", "Maximum Sebessége", "Férőhely", "Maximum Távolság", "Gyártás kezdete"]


    tomb = []
    for x in myresult:
        adat = {}
        adat['id'] = x[0]
        adat['nev'] = x[1]
        adat['tipus'] = x[2]
        adat['seb'] = x[3]
        adat['kap'] = x[4]
        adat['maxtav'] = x[5]
        adat['ev'] = x[6]

        tomb.append([x[0],x[1],x[2],x[3],str(x[4]) + " fő",x[5],x[6]])

    print(tabulate(tomb, headers=header, tablefmt="grid"))

def menu():
    # menu
    questions = [
        inquirer.List(
            "menu",
            message="Válassza ki az opciót",
            choices=["Adatok", "Hozzáadás", "Módosítás", "Törlés", "Kilépés"],
        ),
    ]
    answers = inquirer.prompt(questions)

    # összes opció
    match answers.get("menu"):
        case "Adatok":
            adatok()
        case "Hozzáadás":
            hozzad()
        case "Módosítás":
            modosit()
        case "Törlés":
            torol()
        case "Kilépés":
            exit()


# adatok menu
def adatok():
    sql()

def hozzad():
    print("Adatok")

def modosit():
    print("Adatok")

def torol():
    print("Törlés")



#fusson az idők végezetéig
while True:
    menu()
