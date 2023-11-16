from re import X
import inquirer
import mysql.connector
from tabulate import tabulate
import pwinput
from passlib.hash import argon2

tomb = []
ok = False
prob=0
encrypted_pass = "$argon2id$v=19$m=65536,t=3,p=4$9Z5zztkbA4AQgvBeS6k1Bg$MVvROeZxRYhjBeSktrUjkDKvdSMCraI9MgfPGo4Bytk"
password_input = pwinput.pwinput(prompt="Adja meg az adatbázis jelszavát: ")
hash=argon2.hash(password_input)

# jelszó ellenőrzése
while not ok:
    password_correct = argon2.verify(password_input, encrypted_pass)

    if password_correct:
        ok = True
    else:
        password_input = pwinput.pwinput(prompt="Helytelen jelszó! Probálja újra: ")
        prob+=1

        if prob > 2:
            print(prob)
            print("A jelszót, nem sikerült beirni igy nincs jogosultsága szerkeszteni az adatbázist!")
            exit()

    mydb = mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password=password_input,
        database="repulok"
    )

def menu():
    # menu rendszer
    questions = [
        inquirer.List(
            "menu",
            message="Válassza ki az opciót",
            choices=["Adatok", "Hozzáadás", "Módosítás", "Törlés", "Kilépés"],
        ),
    ]

    answers = inquirer.prompt(questions)

    # opció kiválasztása
    match answers.get("menu"):
        case "Adatok":
            adatok()
            input("\nNyomjon meg egy gombot a folytatáshoz...")
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
    mycursor=mydb.cursor()
    mycursor.execute("SELECT * from repulo")
    myresult=mycursor.fetchall()

    header =["ID", "Repülő Gyártója","Típusa", "Maximum Sebessége", "Férőhely", "Maximum Távolság", "Gyártás kezdete"]

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
    mydb.commit()

def hozzad():
    adatok()
    repulonev = input("\nMi a repülő neve?(pl: Airbus)")
    repulotipus = int(input("\nMi a repülő típusa?(pl: 737)"))
    maxseb = int(input("\nMi a repülő max sebessége?"))
    kapacitas = int(input("\nMi a repülő kapacitása?"))
    maxtav = int(input("\nMi a repülő maximum távolsága?(pl: 16500)"))
    gyartaskezdet = int(input("\nMi a repülő első gyártási időpontja (év)?"))
    mycursor=mydb.cursor()
    mycursor.execute("INSERT INTO repulo (repulonev, repulotipus, maxseb, kapacitas, maxtav, gyartaskezdet) VALUES (%s,%s,%s,%s,%s,%s)", (repulonev,repulotipus,maxseb,kapacitas,maxtav,gyartaskezdet))

def modosit():
    print("Adatok")

def torol():
    adatok()
    terel = int(input("\nMelyik ID-t szeretné törölni? "))
    while tomb[-1][0] < terel:
        print("Nincs ilyen ID, irjon be másikat!")
        terel = int(input("\nMelyik ID-t szeretné törölni? "))
    else:
        print("Törlés...")
        mycursor=mydb.cursor()
        mycursor.execute("DELETE FROM repulo where id=%s", (terel,))


#fusson az idők végezetéig
while True:
    menu()
