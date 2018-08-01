const Discord = require('discord.js');
const auth = require('./auth.json');


// Initialize Discord Bot
const bot = new Discord.Client();

bot.login(process.env.BOT_TOKEN);

// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
	member.guild.channels.find("id", '398691402139172864').send('Hi <@!' + member.user.id + ">");
	member.guild.channels.find("id", '398691402139172864').send({
		embed: {
			color: 3447003,
			fields: [{
				name: "Welcome to **Cleanse**!",
				value: "Please tag one of the Mistress or Royalty members with your in-game name using the **@** symbol to receive access!"
			}],
		}
	}); 
});

bot.on('guildMemberRemove', member => {
    member.guild.channels.find("id", '398691402139172864').send(member.user.username + ' has left the server');
});
