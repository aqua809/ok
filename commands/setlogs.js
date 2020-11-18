  const Discord = require("discord.js")
const db = require("quick.db")
const ms = require('parse-ms')
const fs = require('fs')
module.exports = {
   name: "setlogs",
   description: "bypass auser for verifying",
   run: async (client, message, args, db , prefix) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Missing Permission **ADMINISTRATOR**`)
    let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
   if(!channel) return message.channel.send(`**Mention an channel or intest channel id**`)
   message.channel.send(`Sucssesfully setted logs to ${channel}`)
   db.set(`logs_${message.guild.id}`, channel.id)
    
    }}
