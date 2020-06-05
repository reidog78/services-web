const APIUrl = "http://localhost:8080/api"



fetch(APIUrl + "/chatbots/0").then(function(res) {
    console.log(res)
    return res.json()
}).then(function(res) {
    init(res)
})

function init(res){
    console.log("pouet");
    let bot = new RiveScript();
    bot.loadFile(res.brains, loadingDone, loadingError);
}


document.getElementById("send").addEventListener("click", function() {
    let ent = document.getElementById("entree").value
    let sort = bot.reply("local-user", ent);
    let out = document.getElementById("sortie")
    out.innerHTML(sort);
})

function loadingDone (){
    console.log("ready");
    bot.sortReplies();
}

function loadingError (){
    console.log("error");
}

document.getElementById("send").addEventListener("click", function() {
    let msg = document.getElementById("entree").value
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