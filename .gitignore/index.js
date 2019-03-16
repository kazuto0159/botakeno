const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("");

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

    if (message.content === prefix + "youtube"){
        message.reply("https://www.youtube.com/");
        console.log('youtube');
            
    }

    if (message.content === prefix + "charles"){
        message.reply("https://www.youtube.com/watch?v=NvS351QKFV4");
        console.log('youtube');
    }
    
    if (message.content === prefix + "soom"){
        message.reply("https://www.dropbox.com/s/luqihx4hdo26q09/%C2%A78Soom%20texture%20pack%20%20%C2%A74%5BPaladium%5D.zip?dl=0");
        console.log('serveur soom');
    }
    
    if (message.content === prefix + "ping"){
        message.reply("pong");
        console.log('ping pong');
    }
    
    if (message.content === prefix + "faction"){
        message.reply("kazuto_Himejima Matouspartan thopher59877 Shadowdo Flamo jane Shaddow555");
        console.log('faction');
    }
    
    if (message.content === prefix + "tes ou"){
        message.reply("pas la ");
        console.log('tesOuPasLa');
    }

    if (message.content === prefix + "amv"){
        message.reply("https://www.youtube.com/watch?v=pSqeI4E7Ygk&list=RDpSqeI4E7Ygk&start_radio=1");
        console.log('amv');
    }

    if (message.content === prefix + "dragon"){
        message.reply("https://youtu.be/13BqLQWqvzg?list=RD13BqLQWqvzg");
        console.log('dragon');
    }

    if (message.content === prefix + "put") {
        message.reply("https://i.ebayimg.com/images/g/dfoAAOSwUd9aYcvS/s-l300.jpg");
        console.log('put');
    }
    
    if (message.content === prefix + "OriKami") {
        message.reply("https://www.etsy.com/fr/shop/OriKamiFR");
        console.log('OriKami');
    }

    if (message.content === prefix + "mods"){
        message.reply("mods pack:https://www.dropbox.com/s/33tf04whqmhpcjn/MODS.zip?dl=0");
        console.log('mods');
    }
    
    if (message.content === prefix + "kuikuisan"){
        message.reply("https://www.instagram.com/nord024.concours");
        console.log('insta kuikuisan');
    }
    
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#01FRDC')
        .addField("**help", "commandes du bot !")
        .addField("**kazuto", "insta kazuto")
        .addField("**matou !", "insta matias")
        .addField("**kuikuisan","insta kuikuisan")
        .addField("**OriKami", "Soutenir KuiKuisan")
        .addField("**soom", "pack de texture de la faction")
        .addField("**dragon", "La chanson du dragon")
        .addField("'**live", "live tout les soir")
        .addField("**akeno?", "parler a akeno" )
        .addField("**amv", "amv DXD")
        .addField("**faction", "Membre de la fac: kazuto_Himejima Matouspartan thopher59877 Shadowdo Flamo jane Shaddow555")
         message.channel.sendEmbed(help_embed);
         //message.channel.sendMessage("Voici les commandes du bot :\n -/help pour afficher les commandes");
         console.log("Connande help demandée !");
    }

    if (message.content === prefix + "akeno?"){
        random();

        if (randnum == 0){
            message.reply("je t aime");
            console.log("akeno 0");
        }
    
        if (randnum == 1){
            message.reply("rias a voler mai nouveau sous vetement");
            console.log("akeno 1");
        }

        if (randnum == 2){
            message.reply("hella hella hella issey ma fais un bisou");
            console.log("akeno 2");
        }

        if (randnum == 3){
            message.reply("issey me boude -_-");
            console.log("akeno 3");
        }

    }    
    clientDiscord.on('messageReactionadd',(reaction,user) =>{
    if(reaction.emoji.name === ":tada:")
        clientDiscord.channels.get("486700769320370177").send(':tada: :tada :tada');
})

});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
};

bot.login(process.env.TOKEN);
