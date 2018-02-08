const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("Asylum", {type: "PLAYING"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}list`){

    let botembed = new Discord.RichEmbed()
    .setTitle("Vehicle List \n")
    .setColor("#00bfff")
    .addField("HEMTT Box", "```$14,000 \n30 Processed Iron \n10 Processed Oil \n8 Rubber \n```",)
    .addField("M-900", "```$20,000 \n6 Rubber \n10 Processed Oil \n```",)
    .addField("MH-9 Hummingbird", "```$20,000 \n6 Rubber \n20 Diamond Cut \n20 Processed Oil \n```",)
    .addField("CH-49 Mohawk", "```$30,000 \n1 Flawless Diamond \n10 Rubber \n20 Processed \n```",)
    .addField("PO-30 Orca", "```$40,000 \n1 Flawless Diamond \n20 Diamond Cut \n10 Rubber \n10 Processed \n```",)
    .addField("WY-55 Hellcat", "```$40,000 \n1 Flawless Diamond \n20 Diamond Cut \n10 Rubber \n10 Processed \n```",);

    return message.channel.send(botembed);
  }

  if(cmd === `${prefix}guns`){

    let botembed = new Discord.RichEmbed()
    .setTitle("Gun List \n")
    .setColor("#00bfff")
    .addField("SPAR-17", "```3 Diamond Uncut \n13 Unprocessed Cocaine \n```",)
    .addField("AK-12", "```4 Diamond Uncut \n13 Unprocessed Cocaine \n```",)
    .addField("Mk-1 EMR", "```4 Diamond Uncut \n13 Unprocessed Cocaine \n```",)
    .addField("Mk18 ABR", "```4 Diamond Uncut \n13 Unprocessed Cocaine \n```",)
    .addField("Mk200", "```$20,000 \n2 Diamond Uncut \n30 Crystal Meth \n```",)
    .addField("7.62 mm 20Rnd", "```1 Unprocessed Cocaine \n```",);

    return message.channel.send(botembed);
  }

});

bot.login(tokenfile.token);
