import json

import os



FILE_NAME = "projects.json"



def load_projects():

    if os.path.exists(FILE_NAME):

        with open(FILE_NAME, "r") as f:

            return json.load(f)

    return []



def save_projects(projects):

    with open(FILE_NAME, "w") as f:

        json.dump(projects, f, indent=4)



def add_project(projects):

    name = input("Nom du projet : ")

    status = input("Statut (idee/en cours/termine) : ")

    priority = input("Priorité (1-5) : ")



    project = {

        "name": name,

        "status": status,

        "priority": int(priority)

    }

    projects.append(project)

    print("Projet ajouté !")



def list_projects(projects):

    if not projects:

        print("Aucun projet.")

        return



    sorted_projects = sorted(projects, key=lambda x: x["priority"])

    for i, p in enumerate(sorted_projects, 1):

        print(f"{i}. {p['name']} | {p['status']} | priorité {p['priority']}")



def delete_project(projects):

    list_projects(projects)

    index = int(input("Numéro du projet à supprimer : ")) - 1

    if 0 <= index < len(projects):

        removed = projects.pop(index)

        print(f"{removed['name']} supprimé.")

    else:

        print("Numéro invalide.")



def main():

    projects = load_projects()



    while True:

        print("\n1. Ajouter")

        print("2. Lister")

        print("3. Supprimer")

        print("4. Sauvegarder")

        print("5. Quitter")



        choice = input("Choix : ")



        if choice == "1":

            add_project(projects)

        elif choice == "2":

            list_projects(projects)

        elif choice == "3":

            delete_project(projects)

        elif choice == "4":

            save_projects(projects)

        elif choice == "5":

            break

        else:

            print("Choix invalide.")



if __name__ == "__main__":

    main()
