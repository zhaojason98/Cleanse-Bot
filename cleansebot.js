const Discord = require('discord.js');

// Initialize Discord Bot
const bot = new Discord.Client();

bot.login("NDczOTQzODc0MDU0NzgyOTc2.DkJXjg.XW3GMft0leLrvP6WZOjAD80ceJs");

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
    member.guild.channels.find("id", '413609953077624832').send(member.user.username + ' has left the server');
});
