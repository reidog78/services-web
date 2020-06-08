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
        tr.id = "row-" + i.id;
        let tdId = document.createElement("td")
        tdId.innerHTML = i.id
        let tdNom = document.createElement("td")
        tdNom.innerHTML = i.name

        let tdSuppr = document.createElement("td")
        tdSuppr.innerHTML = "Supprimer"
        tdSuppr.classList.add("but")
        tdSuppr.addEventListener("click", function(e) {
            let id = e.target.parentNode.id.substr(4);
            fetch(APIUrl + "/chatbots/" + id, {
                method: "DELETE"
            }).then(function(res) {
                table.removeChild(e.target.parentNode)
            })
        })

        let tdModif = document.createElement("td")
        tdModif.innerHTML = "Modifier"
        tdModif.classList.add("but")
        tdModif.addEventListener("click", function(e) {
            let id = e.target.parentNode.id.substr(4);
            window.location.href = ("http://localhost:3030/editbot/" + id)
        })

        let tdDiscuter = document.createElement("td")
        tdDiscuter.innerHTML = '<a href="discussion/' + i.id + '">Discuter</a>'

        tr.appendChild(tdId)
        tr.appendChild(tdNom)
        tr.appendChild(tdSuppr)
        tr.appendChild(tdModif)
        tr.appendChild(tdDiscuter)
        table.appendChild(tr)
    }
}