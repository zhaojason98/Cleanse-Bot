const Discord = require('discord.js');

// Initialize Discord Bot
const bot = new Discord.Client();

bot.on('ready', () => {

    console.log('I am ready!');

});

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
    member.guild.channels.find("id", '413609953077624832').send( member.toString() + ' (' + member.user.username + '/' + member.nickname + ') has left the server');
});

bot.login(process.env.BOT_TOKEN);
