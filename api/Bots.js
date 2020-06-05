const Bot = require("./Bot.js");
const data = require("./data.json");

class Bots {
    static nextId;
    constructor() {
        this.bots = new Map();
        data.forEach((item, index, array) => {
            let newBot = new Bot(item, this);
            this.bots.set(newBot.id, newBot);
            Bot.nextId++
        });
    }
    get size() {
        return this.bots.size;
    }
    addBot(bot) {
        let newBot = new Bot(bot, this);
        console.log("addBot :" + JSON.stringify(newBot));
        this.bots.set(newBot.id, newBot);
        return this.getBot(newBot.id);
    }
    getBot(id) {
        //this.bots.forEach(logMapElements);
        //console.log("getting bot with id " + id + " : " + JSON.stringify(this.bots.get(id)));

        return this.bots.get(id);
    }
    deleteBot(id) {
        this.bots.forEach(logMapElements);
        let bot = this.bots.get(id);
        console.log("bot :" + JSON.stringify(bot));
        if (undefined != bot) {
            this.bots.delete(id);
            return id;
        } else {
            return undefined;
        }
    }
    updateBot(updatedBot) {
        const hasBot = this.bots.has(updatedBot.id);
        if (hasBot) {
            this.bots.set(updatedBot.id, updatedBot);
            return updatedBot;
        } else {
            return undefined;
        }
    }
    getBots() {
        let tabBots = [];
        for (const v of this.bots.values()) {
            let bot = {}
            Object.assign(bot, v)
            bot.bot = {}
            tabBots.push(bot);
        }
        return tabBots;
    }
    deleteBots() {
        this.bots.clear();
    }

}

function logMapElements(value, key, map) {
    console.log("m[" + key + "] = " + JSON.stringify(value));
}


module.exports = Bots;