const Discord = require("discord.js")
const db = require("quick.db")
 const ms = require('parse-ms')
 const fs = require('fs')
module.exports = {
    name: "help",
    description: "bypass auser for verifying",
    run: async (client, message, args, db , prefix) => {

    message.channel.send(`
    **Trash Help Menu**
    This bot was maden to show some kid how bad is he

    **Admin Commands**
    ${prefix}setaction [kick/ban]
    ${prefix}setday [ex: 5]
    ${prefix}setlogs [channel]
    ${prefix}toggle
    ${prefix}settings | to view your guild settings
    ${prefix}bypass [user]
    ${prefix}bannedalts | to see logs of kicked / banned users 
    `)
     }}
