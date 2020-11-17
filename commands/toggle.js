const Discord = require("discord.js")
const db = require("quick.db")
 const ms = require('parse-ms')
 const fs = require('fs')
module.exports = {
    name: "toggle",
    description: "to enable and disable",
    run: async (client, message, args, db , prefix) => {

   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Missing Permission **ADMINISTRATOR**`)
 let status = db.get(`status_${message.guild.id}`)
 if(!status) status = false
if(status === false) {
    db.set(`status_${message.guild.id}`, true)
    message.channel.send(`Toggle anit alts kicking system`)
    return;
}
if(status === false) {
    db.set(`status_${message.guild.id}`, false)
    message.channel.send(`disabled anit alts kicking system`)
    return;
}
     }}
