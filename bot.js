const Discord = require('discord.js');

// Initialize Discord Bot
const bot = new Discord.Client();

bot.on('ready', () => {

    console.log('I am ready!');

});

// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
	member.guild.channels.find("id", '510678048534691851').send('Hi <@!' + member.user.id + ">");
	member.guild.channels.find("id", '510678048534691851').send({
		embed: {
			color: 3447003,
			fields: [{
				name: "Welcome to **Cleanse**!",
				value: "Please tag one of the Mistress or Royalty members your IGN information!"
			}],
		}
	}); 
});

bot.on('guildMemberRemove', member => {
	if (member.nickname) {
   		member.guild.channels.find("id", '510680059271577610').send( member.toString() + ' (' + member.user.username + '/' + member.nickname + ') has left the server');
	} else {
		member.guild.channels.find("id", '510680059271577610').send( member.toString() + ' (' + member.user.username + ') has left the server');
	}
});

bot.login(process.env.BOT_TOKEN);
