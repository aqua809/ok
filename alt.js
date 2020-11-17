const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
const ms = require('ms')
const lol = require('pretty-ms')
const config = require('./config.json')
client.login(config.token)
client.on('ready', () => {
    console.log(client.user.tag)
})
let prefix = config.prefix;
client.on('guildMemberAdd', member => {
    let status = db.get(`status_${member.guild.id}`)
    let guild = client.guilds.cache.get(member.guild.id)
    if(!status) status = false;
     if(status === false) return
     if(status === true) {
         let bypass = db.get(`user_${member.guild.id}_${member.id}`)
         if(bypass === true) {
            let logs = db.get(`logs_${member.guild.id}`)
            if(!logs) return; // cannot take an action without logs

            let embed = new Discord.MessageEmbed()
            .setAuthor(member.user.tag , member.user.displayAvatarURL())
            .setDescription(`
     user ${member.user.tag} joined 
     and his safe bc he got abypass
            `)
            .setFooter(guild.name , guild.iconURL())
            .setTimestamp()
            let channel = guild.channels.cache.get(logs)
 channel.send(embed)
         }
          let time  = db.get(`time_${member.guild.id}`)
         if(!time) time = "259200000"
          let accountdate = Date.now() - member.user.createdAt  
          if(time < accountdate) {
            console.log('not an alt')

            let logs = db.get(`logs_${member.guild.id}`)
            if(!logs) return; // cannot take an action without logs

            let embed = new Discord.MessageEmbed()
            .setAuthor(member.user.tag , member.user.displayAvatarURL())
            .setDescription(`
     user ${member.user.tag} joined 
     and his safe not an alt
            `)
            .setFooter(guild.name , guild.iconURL())
            .setTimestamp()
            let channel = guild.channels.cache.get(logs)
 channel.send(embed)
            
        }
         if(time > accountdate) {
// alt
console.log('Alt')

let action = db.get(`action_${member.guild.id}`)
if(!action) action = "Null"
let logs = db.get(`logs_${member.guild.id}`)
if(!logs) return; // cannot take an action without logs
 let embed = new Discord.MessageEmbed()
.setAuthor(member.user.tag , member.user.displayAvatarURL())
.setDescription(`
Found an alt **${member.user.tag}**
the action has been taken on him
${action}
`)
.setFooter(guild.name , guild.iconURL())
.setTimestamp()

let channel = guild.channels.cache.get(logs)
if(action === null) {
channel.send(embed)
}
if(action === 'ban') {
 
    channel.send(embed)
    member.send(`you have been banned from ${guild.name} for begin an alt loser`)
    let data = {
        user: member.user.tag
        ,
        reason: 'banned'
    }
    db.push(`banned_kicked_${member.guild.id}`, data)
    guild.members.cache.get(member.id).ban({ reason: 'alt'})
}
if(action === 'kick') {
     channel.send(embed)
    member.send(`you have been kicked from ${guild.name} for begin an alt loser`)
    let data = {
        user: member.user.tag
        ,
        reason: 'kick'
    }
    db.push(`banned_kicked_${member.guild.id}`, data)
    guild.members.cache.get(member.id).kick({ reason: 'alt'})
}
         }
    }
    })
const { join } = require('path');
const { readdirSync } = require('fs');
client.commands= new Discord.Collection();
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name , command);
}

    client.on("message", async message => {
           if(message.author.bot) return;
           if(message.channel.type === 'dm') return;
       
           if(message.content.startsWith(prefix)) {
               
      
               const args = message.content.slice(prefix.length).trim().split(/ +/);
       
               const command = args.shift().toLowerCase();
       
               if(!client.commands.has(command)) return;
       
       
               try {
                   client.commands.get(command).run(client, message, args, db , prefix);
       
               } catch (error){
                   console.error(error);
               }
            }
       })
    
 
 
