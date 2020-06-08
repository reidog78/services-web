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

Pour parler avec un bot, il faut utiliser le préfixe "!!". Par exemple, le message Discord doit être "!!Hello bot !".
Une amélioration de l'API pourrait être de paramétrer ce préfixe pour qu'il soit différent pour chaque bot ajouté.

# Présentation du serveur

Le serveur permet d'accéder à une partie de l'API décrite ci-dessus et est démarré à l'adresse http://localhost:3030

## Pages disponibles

- http://localhost:3030/creer : Page de création d'un bot, avec plusieurs paramètres. note : ne pas oublier de fournir le chemin du cerveau ("./brains/standard.rive" par exemple pour le cerveau standard)
- http://localhost:3030/bots : Liste des bots déjà créés avec quelques actions disponibles pour chaque bot (suppression, lien vers dicussion)
- http://localhost:3030/discussion/idBot : Page permettant d'interagir avec le bot idBot en choisissant son nom d'utilisateur et en lui envoyant un message
- http://localhost:3030/editbot/idBot : Page permettant de modifier le bot idBot (non terminée faute de temps, la requête coté API est fonctionnelle mais le côté client n'a pas été implémenté)

Ces pages se chargeront d'effectuer des requêtes Fetch sur l'API