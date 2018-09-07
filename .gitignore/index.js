const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("**");

bot.on('ready', () => {
    bot.user.setPresence({game: { name: 'Sucer issey dans les vestiaire', type: 0} });
    console.log("bot ready ! ");
});

bot.on('message', message => {
    if (message.content === prefix + "matou"){
        message.reply("https://www.instagram.com/mathias_mtn/");
        console.log('insta matou');
    }

    if (message.content === prefix + "kazuto"){
        message.reply("https://www.instagram.com/kazouto_yuki/");
        console.log('insta kazuto');
    }

    if (message.content === prefix + "soom"){
        message.reply("https://www.youtube.com/watch?v=TsuTj1VU0Ys");
        console.log('serveur soom');
    }

    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#06D597')
            .addField("**kazuto", "insta kazuto")
            .setFooter("C'est tout pour le moment !")
            .addField("**matou !", "insta matias ")
            .addField("**soom", "pack de texture de la faction")
            .addField("**help", "commandes du bot !")
            .addField("**faction", "Membre de la fac: kazuto_Himejima Matouspartan thopher59877 Shadowdo Flamo jane Shaddow555")
         message.channel.sendEmbed(help_embed);
         //message.channel.sendMessage("Voici les commandes du bot :\n -/help pour afficher les commandes");
         console.log("Connande help demandée !");
    }

    if (message.content === "comment va tu akeno?"){
        random();

        if (randnum == 3){
            message.reply("je t aime");
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

bot.login(process.env.TOKEN);
