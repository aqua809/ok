const Discord = require("discord.js")
const db = require("quick.db")
 const ms = require('parse-ms')
 const fs = require('fs')
module.exports = {
    name: "bannedalts",
    description: "bypass auser for verifying",
    run: async (client, message, args, db , prefix) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Missing Permission **ADMINISTRATOR**`)
        let bannded = db.get(`banned_kicked_${message.guild.id}`)
        if(!bannded) return message.channel.send(`none`)
   let arr = []
        if(bannded && bannded.length) {
            bannded.forEach(users => {
  arr.push(`${users.user} | ${users.reason}`)
  });
  if(arr.length === 0) return message.channel.send(`Empty-`)
  let embed = new Discord.MessageEmbed()
  .setDescription(arr)
  return message.channel.send(embed)
        }  
     }}
