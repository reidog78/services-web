const APIUrl = "http://localhost:8080/api"

document.getElementById("send").addEventListener("click", function() {
    let nom = document.getElementById("nom").value
    let bot = {
        name: nom
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