const APIUrl = "http://localhost:8080/api"



fetch(APIUrl + "/chatbots").then(function(res) {
    return res.json()
}).then(function(res) {
    creerTableau(res)

})

function creerTableau(res) {
    let table = document.getElementById("tableau")
    for (i of res) {
        let tr = document.createElement("tr")
        let tdId = document.createElement("td")
        tdId.innerHTML = i.id
        let tdNom = document.createElement("td")
        tdNom.innerHTML = i.name
        tr.appendChild(tdId)
        tr.appendChild(tdNom)
        table.appendChild(tr)
    }
}