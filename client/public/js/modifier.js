const APIUrl = "http://localhost:8080/api"
const elemName = document.getElementById("nom")

fetch(APIUrl + "/chatbots/" + idBot).then(function(res) {
    return res.json()
}).then(function(res) {
    console.log(res)
    remplir(res)
})

function remplir(res){
    elemName.value = res.name
}

/*document.getElementById("send").addEventListener("click", function() {
    let username = elemUsername.value
    let msg = elemMsg.value

    console.log("Here!")
    if (username != "" && msg != "") {
        let envoi = {
            message: msg,
            username: username
        }

        fetch(APIUrl + "/chatbots/" + idBot, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(envoi)
        }).then(function(res, err) {
            return res.json()
        }).then(function(res, err) {
            console.log(res)
            elemResponse.innerHTML = res.message
        })
    }
})*/