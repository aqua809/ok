 const Discord = require("discord.js")
const db = require("quick.db")
 const ms = require('parse-ms')
 const fs = require('fs')
module.exports = {
    name: "settings",
    description: "bypass auser for verifying",
    run: async (client, message, args, db , prefix) => {

   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Missing Permission **ADMINISTRATOR**`)
   let time = await db.get(`time_${message.guild.id}`)
  let o = ms(time)
let stauts  = {
    true: 'on',
    false: 'off'
}
  let embed = new Discord.MessageEmbed()
     .setAuthor(message.author.username , message.author.displayAvatarURL())
     .setTitle(`Alts Kicking system for ${message.guild.name}`)
     .setDescription(` 
    \`\`\`
    Set days: ${o.days + "d" || '< Not set >'}
    Logs Channel ID: ${db.get(`logs_${message.guild.id}`) || '< No Set >'}
    Alts Kicking: ${stauts[db.get(`status_${message.guild.id}`)] || 'off'}\`\`\`
     `)
  .setFooter(message.guild.name , message.guild.iconURL())
  .setTimestamp()
  message.channel.send(embed)

     }}
