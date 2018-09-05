const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = (":");

bot.on('ready', () => {
    bot.user.setPresence({game: { name: 'Sucer issey dans les vestiaire', type: 0} });
    console.log("bot ready ! ");
});

bot.on('message', message => {
    if (message.content === "ping"){
        message.reply("pong");
        console.log('ping pong');
    }

    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#D9F200')
            .addField("commandes du bot !", "  :help : Affiche les commandes du bot ")
            .addField("Interaction", "ping : Le bot répond pong !")
            .setFooter("C'est tout pour le moment !")
         message.channel.sendEmbed(help_embed);
         //message.channel.sendMessage("Voici les commandes du bot :\n -/help pour afficher les commandes");
         console.log("Connande help demandée !");
    }

    if (message.content === "comment va tu akeno?"){
        random();

        if (randnum == 3){
            console-log(randnum);
        }
    
        if (randnum == 1){
            message.reply("rias a voler mai nouveau sous vetement");
            console.log(randnum);
        }

        if (randnum == 4){
            message.reply("hella hella hella issey ma fais un bisou");
            console.log(randnum);
        }

        if (randnum == 2){
            message.reply("issey me boude -_-");
            console.log(randnum);
        }

    }    

});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(4);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
};

bot.login('NDg2MzI0MzkyODcyMTE2MjU0.DnEA4Q.zSVGZie6pk_CrL5qQ9r4FHQWSH0')
