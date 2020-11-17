const Discord = require("discord.js")
const db = require("quick.db")
 const ms = require('parse-ms')
 const fs = require('fs')
module.exports = {
    name: "setaction",
    description: "bypass auser for verifying",
    run: async (client, message, args, db , prefix) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Missing Permission **ADMINISTRATOR**`)

        if(!args[0]) return message.channel.send(`available actions\n kick | ban`)
        if(args[0].toLowerCase() === 'kick') {
            db.set(`action_${message.guild.id}`, 'kick')
            message.channel.send(`Action has been setted to **KICK**`)
        }
        if(args[0].toLowerCase() === 'ban') {
            db.set(`action_${message.guild.id}`, 'ban')
            message.channel.send(`Action has been setted to **BAN**`)
        }
    
     }}
