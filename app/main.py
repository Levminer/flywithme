import enquiries
import os
import mysql.connector

db = mysql.connector.connect(
    host="192.168.105.17",
    user="root",
    password="12345678",
    database="repulok"
)

mycursor = db.cursor()

mycursor.execute("SELECT * FROM repulo")

myresult = mycursor.fetchall()

for x in myresult:
  print(x)

def clear():
    os.system("clear")
    input("Nyomj entert a folytatáshoz...")


def menu():
    options = ["Adatok", "Hozzáadás", "Módosítás", "Törlés", "Kilépés"]

    selected = enquiries.choose("Válassz egy menüpontot: ", options)

    print("FlyWithMe\n")

    match selected:
        case "Adatok":
            adatok()

            input("Nyomj entert a folytatáshoz...")
            menu()

        case "Kilépés":
            exit()


def adatok():
    print("Adatok")


while True:
    menu()
