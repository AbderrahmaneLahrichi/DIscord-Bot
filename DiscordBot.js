 const{ Client, GatewayIntentBits ,EmbedBuilder, PermisionsBitField, Permissions, ActivityType} = require("discord.js");
const prefix = "!";
const client = new Client({intents:[GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const axios = require('axios')

     
client.on("ready", () =>{

    client.user.setActivity(`playing with cats and dogs`, {type:"watching"}); 
  

})
client.on("messageCreate", (message) =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


// This will generate the random dog image.
  if (command === "dog") {
    axios.get('https://api.thedogapi.com/v1/images/search')
    .then(response =>{
      message.channel.send(response.data[0].url)
})
    .catch(console.error)
  }
//This will generate the random cat image
  if (command === "cat") {
    axios.get('https://api.thecatapi.com/v1/images/search')
    .then(response =>{
      message.channel.send(response.data[0].url)
})
    .catch(console.error)
  }
 })




 //Place discord bot developer token here
client.login();



