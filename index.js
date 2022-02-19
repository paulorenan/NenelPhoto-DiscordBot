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
    const numero = Math.floor(Math.random() * 182) + 1;
    if (numero > 173 && numero !== 177) {
      msg.channel.send({
        files: [
          `https://raw.githubusercontent.com/paulorenan/NenelPhotoBot/main/fotos/nenel${numero}.mp4`
        ]
      })
    } else if (numero === 177) {
      msg.channel.send({
        files: [
          `https://raw.githubusercontent.com/paulorenan/NenelPhotoBot/main/fotos/nenel${numero}.3gp`
        ]
      })
    } else {
    msg.channel.send({
      files: [
        `https://raw.githubusercontent.com/paulorenan/NenelPhotoBot/main/fotos/nenel${numero}.jpg`,
      ],
    });
  }
  }
});
