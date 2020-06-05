const APIUrl = "http://localhost:8080/api"

const elemUsername = document.getElementById("username")
const elemMsg = document.getElementById("msg")
const elemResponse = document.getElementById("sortie")

document.getElementById("send").addEventListener("click", function() {
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
})