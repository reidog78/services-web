# Présentation de l'API

L'API est démarrée à l'adresse localhost:8080

## Requêtes

Les requêtes accessibles sont:
- GET sur http://localhost:8080/api/chatbots : récupère la liste des chatbots disponibles en JSON
- POST sur http://localhost:8080/api/chatbots : crée un chatbot avec les informations contenues dans le corps de la requête en JSON
    
- GET sur http://localhost:8080/api/chatbots/idBot : récupère les informations concernant le chatbot idBot en JSON
- POST sur http://localhost:8080/api/chatbots/idBot : envoie un message au bot idBot au format JSON
- PUT sur http://localhost:8080/api/chatbots/idBot : modifie le bot idBot avec les informations du corps de la requête en JSON
- DELETE sur http://localhost:8080/api/chatbots/idBot : supprime le bot idBot

## Structure des JSONs

Tous les paramètres sont optionnels et possèdent une valeur par défaut

- Créer un bot :
{
    id: 2
    name: "My Bot",
    brains: "./brains/standard.rive,./brains/advanced.rive",
    access: "discordToken"
}

- Envoyer un message :
{
    username: "Mon nom d'utilisateur",
    message: "Hello World !"

}

# Présentation du serveur

Le serveur permet d'accéder à une partie de l'API décrite ci-dessus et est démarré à l'adresse http://localhost:3030

## Pages disponibles

- http://localhost:3030/creer : Page de création d'un bot, avec plusieurs paramètres
- http://localhost:3030/bots : Liste des bots déjà créés avec quelques actions disponibles pour chaque bot (suppression, lien vers dicussion)
- http://localhost:3030/discussion/idBot : Page permettant d'interagir avec le bot idBot en choisissant son nom d'utilisateur et en lui envoyant un message

Ces pages se chargeront d'effectuer des requêtes Fetch sur l'API