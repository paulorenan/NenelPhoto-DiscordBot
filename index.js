const Discord = require('discord.js');
const {Intents, Client} = require('discord.js');
const {token, prefix} = require('./config.js');


const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.login(token);

client.on('ready', () => {
  console.log('Bot active!');
});

client.on('messageCreate', (msg) => {
  if ((msg.content).toLocaleLowerCase() === 'nenel') {
    const numero = Math.floor(Math.random() * 416) + 1;
    if (numero === 1) {
      msg.channel.send({
        files: [`https://raw.githubusercontent.com/paulorenan/NenelPhotoBot/main/fotos/nenel${numero}.gif`]
      })
    }else if (numero > 1 && numero <= 328) {
      msg.channel.send({
        files: [`https://raw.githubusercontent.com/paulorenan/NenelPhotoBot/main/fotos/nenel${numero}.jpg`]
      })
    } else if (numero > 328 && numero <= 383) {
      msg.channel.send({
        files: [`https://raw.githubusercontent.com/paulorenan/NenelPhotoBot/main/fotos/nenel${numero}.png`]
      })
    } else if ( numero === 384) {
      msg.channel.send({
        files: [`https://raw.githubusercontent.com/paulorenan/NenelPhotoBot/main/fotos/nenel${numero}.webp`]
      })
    } else if (numero === 385) {
      msg.channel.send({
        files: [`https://raw.githubusercontent.com/paulorenan/NenelPhotoBot/main/fotos/nenel${numero}.3gp`]
      })
    } else if (numero > 385) {
      msg.channel.send({
        files: [`https://raw.githubusercontent.com/paulorenan/NenelPhotoBot/main/fotos/nenel${numero}.mp4`]
      })
    }
  }
  if ((msg.content).toLocaleLowerCase() === 'nenel videos' || (msg.content).toLocaleLowerCase() === 'nenel video') {
    const numeroVideosArray = []
    for (i = 385; i <= 416; i++) {
      numeroVideosArray.push(i);
    }
    const numeroArr = Math.floor(Math.random() * 32)
    if (numeroArr === 0) {
      msg.channel.send({
        files: [`https://raw.githubusercontent.com/paulorenan/NenelPhotoBot/main/fotos/nenel${numeroVideosArray[numeroArr]}.3gp`]
      })
    } else {
      msg.channel.send({
        files: [`https://raw.githubusercontent.com/paulorenan/NenelPhotoBot/main/fotos/nenel${numeroVideosArray[numeroArr]}.mp4`]
      })
    }
  }
  if ((msg.content).toLocaleLowerCase() === 'nenel bebado') {
    const numerobebadoArr = [150, 296, 297, 319, 331, 415, 416]
    const numeroBeb = Math.floor(Math.random() * 7)
    if (numeroBeb <= 3) {
      msg.channel.send({
        files: [`https://raw.githubusercontent.com/paulorenan/NenelPhotoBot/main/fotos/nenel${numerobebadoArr[numeroBeb]}.jpg`]
      })
    } else if ( numeroBeb === 4) {
      msg.channel.send({
        files: [`https://raw.githubusercontent.com/paulorenan/NenelPhotoBot/main/fotos/nenel${numerobebadoArr[numeroBeb]}.png`]
      })
    } else {
      msg.channel.send({
        files: [`https://raw.githubusercontent.com/paulorenan/NenelPhotoBot/main/fotos/nenel${numerobebadoArr[numeroBeb]}.mp4`]
      })
    }
  }
});
