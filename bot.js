const discord = require('discord.js');
const client = new discord.Client();
const prefix = '?';
const token = 'NTMxMjE3Mzc2MzA2Mzk3MjE1.DxKuhg.QnjqhkMIS16xRL4Qz_nirf_7keA';

client.on('ready', () => {
    console.log('Ready')
        client.user.setStatus('available')
        client.user.setPresence({
            game: {
                name: client.guilds.size + ' ' + 'servers || ?help',
                type: "WATCHING",
            }
    });
})

client.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'reset')
  message.channel.send('Resetting...')
  .then(msg => client.destroy())
  .then(() => client.login('NTMxMjE3Mzc2MzA2Mzk3MjE1.DxKuhg.QnjqhkMIS16xRL4Qz_nirf_7keA'));
})

client.on('message', message => {
    if (!message.guild) return;
    if (message.content === prefix + 'ping')
    message.channel.send('`Pong!` :ping_pong:')
  })

client.on('message', message => {
    if(message.content === prefix + 'ms') 
    var msCalEmbed = new discord.RichEmbed()
    .setDescription(new Date().getTime() - message.createdTimestamp + " ms")
    message.channel.send(msCalEmbed)
})

client.on('message', message => {
    if (!message.guild) return;
    if (message.content === prefix + 'donate')
    message.channel.send('Currently we do not have a donate page. Please be patient and keep in touch on the main server for updates regarding that')
})

client.on('message', message => {
  if (!message.guild) return
  if (message.content === prefix + 'help')
  var helpEmbed = new discord.RichEmbed()
  .setTitle('Help')
  .addField('Fun (3)',
  '`ping`,`donate`,`ms`')
  .addField('Moderation (2)',
  '`kick`,`ban`')
  message.author.send(helpEmbed)
})
client.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'help')
  message.channel.send('`Check Your DMs` :speech_left:')
})





client.on('message', message => {
    if (!message.guild) return;
    if (message.content === prefix + 'kick') {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.kick('Optional reason that will display in the audit logs').then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
          })
        } else {
          message.reply('That user isn\'t in this guild!');
        }
      } else {
        message.reply('You didn\'t mention the user to kick!');
      }
    }
  });

  client.on('message', message => {
    if (!message.guild) return;
    if (message.content === prefix + 'ban') {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.ban({
            reason: 'They broke the rules / violated the TOS to discord or the server',
          }).then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          })
        } else {
          message.reply('That user isn\'t in this guild!');
        }
      } else {
        message.reply('You didn\'t mention the user to ban!');
      }
    }
  });





client.login(token)