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
  if (msg.content === 'nenel') {
    const numero = Math.floor(Math.random() * 322) + 1;
    if (numero > 0 && numero < 12 && numero !== 8) {
      msg.channel.send({
        files: [`https://raw.githubusercontent.com/paulorenan/NenelPhotoBot/main/fotos/nenel${numero}.mp4`]
      })
    } else if (numero === 8) {
      msg.channel.send({
        files: [`https://raw.githubusercontent.com/paulorenan/NenelPhotoBot/main/fotos/nenel${numero}.3gp`]
      })
    } else if ( numero >= 12 && numero <= 63) {
      msg.channel.send({
        files: [`https://raw.githubusercontent.com/paulorenan/NenelPhotoBot/main/fotos/nenel${numero}.png`]
      })
    } else if (numero >= 64 && numero <= 86) {
      msg.channel.send({
        files: [`https://raw.githubusercontent.com/paulorenan/NenelPhotoBot/main/fotos/nenel${numero}.jpeg`]
      })
    } else if (numero === 322) {
      msg.channel.send({
        files: [`https://raw.githubusercontent.com/paulorenan/NenelPhotoBot/main/fotos/nenel${numero}.gif`]
      })
    } else if (numero >= 87) {
      msg.channel.send({
        files: [`https://raw.githubusercontent.com/paulorenan/NenelPhotoBot/main/fotos/nenel${numero}.jpg`]
      })
    }
  }
});
