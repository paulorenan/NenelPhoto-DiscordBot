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
    const numero = Math.floor(Math.random() * 415) + 1;
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
});
