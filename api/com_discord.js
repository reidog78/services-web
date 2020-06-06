const Discord = require('discord.js');
const client = new Discord.Client();
const APIUrl = "http://localhost:8080/api"
const Bots = require("./Bots.js");

let boto = Bots.getBot(0)

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	
    str = boto.tell(message.author.username, message.content)

    message.channel.send(str)
});

client.login('NzE4ODc0MzE0MjYyMTgzOTM3.XtvOSg.rKxjBVnR_OmAs4U6OX6ocISJHEQ');