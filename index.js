// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Hui's  bot`);
});

//All above are required to run the bot, the rest below are the actions etc that bot will perform

// Set the prefix
let prefix = "!";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "who")) {
    message.channel.send(":ok_hand: `HUI(AHOY)'s first bot!!!` :ok_hand: ");
  } else
  if (message.content.startsWith(prefix + "link")) {
    message.channel.send(":beers: Under construction: `https://363687847.github.io/` :beers: ");
  }
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send(":sweat_smile: `Not Done Yet`:sweat_smile: ");
  }
});


client.login(config.token);