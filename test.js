const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages
	],
});

const channelId = 'PUT YOUR CHANNEL ID HERE';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
  });
  
  client.on('messageCreate', async (message) => {
    if (message.channel.id === channelId) {
      await message.react('👍');
      await message.react('👎');
    }
  });
  
  (async () => {
    await client.login('PUT YOUR BOTS TOKEN HERE');
  })();