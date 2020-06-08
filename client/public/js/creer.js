const APIUrl = "http://localhost:8080/api"

document.getElementById("send").addEventListener("click", function() {
    let nom = document.getElementById("nom").value
    let cerveaux = document.getElementById("cerveaux").value
    let accessToken = document.getElementById("discordToken").value
    let bot = {
        name: nom,
        brains: cerveaux.split(","),
        access: accessToken
    }
    console.log(bot)
    fetch(APIUrl + "/chatbots", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bot)
    }).then(function(res) {
        return res.json()
    }).then(function(res) {
        console.log(res)
    })
})