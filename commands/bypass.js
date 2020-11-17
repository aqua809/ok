const Discord = require("discord.js")
const db = require("quick.db")
 const ms = require('parse-ms')
 const fs = require('fs')
module.exports = {
    name: "bypass",
    description: "bypass auser for verifying",
    run: async (client, message, args, db , prefix) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Missing Permission **ADMINISTRATOR**`)
        let user = message.mentions.users.first() || client.users.cache.get(args[0])
     if(!user) return message.channel.send(`Can't find that user`)
     db.set(`user_${message.guild.id}_${user.id}`, true)
     return message.channel.send(`${user} now can bypass anit - alt system`)
    }}
