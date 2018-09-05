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

});

bot.login(process.env.TOKEN);
