const Discord = require("discord.js")
const db = require("quick.db")
 const ms = require('ms')
 const fs = require('fs')
const { Console } = require("console")
module.exports = {
    name: "setdays",
    description: "bypass auser for verifying",
    run: async (client, message, args, db , prefix) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Missing Permission **ADMINISTRATOR**`)
        if(!args[0]) return message.channel.send(`invaild usage of the command setdays [5] its will be auto 5days.`)
        if(isNaN(args[0])) return message.channel.send(`It's must be numbers`)
let a = `${args[0]}d`

        db.set(`time_${message.guild.id}`, ms(a)) 
        return message.channel.send(`Succsesfully Changed time to ${args[0]}days`)
      }}
