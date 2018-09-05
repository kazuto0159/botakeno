const Discord = require("discord.js");

var PREFIX = "!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("TutoBot, !help");
    console.log("Le bot a bien ete connecte");
});

bot.login(process.env.TOKEN);
