import inquirer


def menu():
    # menu
    questions = [
        inquirer.List(
            "menu",
            message="Válassze opciót",
            choices=["Adatok", "Hozzáadás", "Módosítás", "Törlés", "Kilépés"],
        ),
    ]
    answers = inquirer.prompt(questions)

    # összes opció
    match answers.get("menu"):
        case "Adatok":
            adatok()

        case "Kilépés":
            exit()


# adatok menu
def adatok():
    print("Adatok")


while True:
    menu()
