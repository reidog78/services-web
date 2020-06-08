const RiveScript = require('rivescript')
const Discord = require('discord.js');
const client = new Discord.Client();

class Bot {
    static nextId = 0;
    constructor(data) { //id,name,access,brains
        if (undefined != data.id) {
            this.id = data.id;
        } else {
            this.id = Bot.nextId;
        }
        if (undefined != data.name) {
            this.name = data.name;
        } else {
            this.name = "";
        }
        if (undefined != data.access) {
            this.access = data.access;
        } else {
            this.access = [];
        }
        if (undefined != data.brains) {
            this.brains = data.brains;
        } else {
            this.brains = ["./brains/standard.rive"];
        }
        this.bot = new RiveScript();
        this.loadbrains()
    }

    loading_done() {
        this.bot.sortReplies()
    }

    loadbrains() {
        this.bot.loadFile(this.brains).then((bot) => {

            this.bot.sortReplies()
        })
    }

    tell(courrier_recommander) {
        return this.bot.reply(courrier_recommander.username, courrier_recommander.message).then(function(res) {
            return res;
        });
    }

    loadDiscord(token) {
        client.once('ready', () => {
            console.log('Ready!');
        });
        
        client.on('message', message => {
	
            str = this.tell(message.author.username, message.content)
        
            message.channel.send(str)
        });
        
        client.login(token);
    }

}

module.exports = Bot;