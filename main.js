const { Client, MessageEmbed } = require("discord.js");
const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Création des plans");
});

client.login(process.env.TOKEN);
