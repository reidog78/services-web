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
            this.brains = [];
        }
    }


}

module.exports = Bot;