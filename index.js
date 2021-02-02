const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const prefix = config.PREFIX;
client.on("ready", () => {
   console.log(`Estoy listo! Generic Bot ONLINE GOGO `);
    client.user.setActivity("3 Servidores");
});
client.on('message', async message => {
var args = message.content.slice(prefix.length).split(/ +/g);
var command = args.shift().toLowerCase();

    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;


    
    if (command === 'kick') {

        let user = message.mentions.users.first();
        let razon = args.slice(1).join(' ');
        let permiso = message.member.hasPermission("KICK_MEMBERS");
        if (!permiso) {
            message.channel.send(`You dont have permissions to do this.`);
        } else {
            if (message.mentions.users.size < 1) return message.reply('You need to select someone.').catch(console.error);
            if (!razon) return message.channel.send(' Please specify a reason');
            if (!message.guild.member(user).kickable) return message.reply('I cant kick the user you selected.');

            message.guild.member(user).kick(razon);
            message.channel.send(`**${user.username}**, has been kicked from the server for the reason of: ${razon}.`);

        }
    }

    if (command === "creators") {
        const embedDatos = new Discord.MessageEmbed()
            .setTitle("Bot Creators:")
            .setColor(0x00AE86)
            .setDescription("Intuitive Popcorn#8601 and Lapzon#0122.")
            .setTimestamp()

        message.channel.send({ embed: embedDatos });

    }


    if (command === "serverinfo") {
        var server = message.guild;

        const embed = new Discord.MessageEmbed()
            .setThumbnail(server.iconURL())
            .setAuthor(server.name, server.iconURL())
            .addField('ID', server.id, true)
            .addField('Region', server.region, true)
            .addField('Creado el', server.joinedAt.toDateString(), true)
            .addField('Dueño del Servidor', server.owner.user.tag, true)
            .addField('Miembros', server.memberCount, true)
            .setColor(0x66b3ff)

        message.channel.send(embed);

    }





    if (command === "supportsv") {
        const embedDatos = new Discord.MessageEmbed()
            .setTitle("Support Server:")
            .setColor(0x00AE86)
            .setDescription("Status: :white_check_mark: Active :white_check_mark: ")
            .setURL("https://discord.gg/invite/cJjzC26Znh")
            .setTimestamp()

        message.channel.send({ embed: embedDatos });

    }

    if (command === "ggsv") {
        const embedDatos = new Discord.MessageEmbed()
            .setTitle("Generic Gang Server:")
            .setColor(0x00AE86)
            .setDescription("Status: :white_check_mark: Active :white_check_mark: ")
            .setURL("https://discord.gg/invite/qG2va54F6b")
            .setTimestamp()
    }
    if (command === "ggsv") {
        const embedDatos = new Discord.MessageEmbed()
            .setTitle("Generic Gang Server:")
            .setColor(0x00AE86)
            .setDescription("Status: :white_check_mark: Active :white_check_mark: ")
            .setURL("https://discord.gg/qG2va54F6b")
            .setTimestamp()

        message.channel.send({ embed: embedDatos });

    }


    if (message.content.startsWith(prefix + 'help')) {

        message.channel.send('**' + message.author.username + '**, Check your DM messages.');
        message.author.send('**Generic Bot Commands **\n```\n' +
            '-> ' + prefix + 'ping           :: Shows your messages latence.\n' +
            '-> ' + prefix + 'avatar <@user> :: Shows the avatar of the user that you select.\n' +
            '-> ' + prefix + 'ggsv           :: Shows the link of the official Generic Gang Server.\n' +
            '-> ' + prefix + 'supportsv      :: Shows the link of the official Support Server.\n' +
            '-> ' + prefix + 'upgrade        :: Shows the steps to upgrade the bot.\n' +
            '-> ' + prefix + 'creators       :: Shows the list of the bot creators.\n' + 
            '-> ' + prefix + 'serverinfo     :: Shows the information of the server in wich you put the command.\n' +
            '-> ' + prefix + '8ball          :: The bot will answer to your questions.\n' +
            '-> ' + prefix + 'ban <@user>    :: Bans an user from de server.\n' +
            '-> ' + prefix + 'kick <@user>   :: Kicks an user from the server.\n' +
            '-> ' + prefix + 'yt             :: Shows the yt channel of the bot creators.\n```\n\n' +
            '**Generic Bot - Suport Server :**\nhttps://discord.gg/cJjzC26Znh');

    }



    if (command === "yt") {
        const embedDatos = new Discord.MessageEmbed()
            .setTitle("Creators YT Channels")
            .setColor(0x00AE86)
            .setDescription("Intuitive Popcorn Channel: https://www.youtube.com/channel/UCFmV8xW7qRYmJkIJa8-y4-g ./////// Lapzon Channel: https://www.youtube.com/channel/UCGZ4BqyrRsLJfaRTOmMmsEw")
            .setTimestamp()

        message.channel.send({ embed: embedDatos });

    }

    if (command === 'ban') {

        let mencionado = message.mentions.users.first();
        let razon = args.slice(1).join(' ');
        let permiso = message.member.hasPermission("BAN_MEMBERS");
        if (!permiso) {
            message.channel.send(`You dont have permissions to do this.`);
        } else {
            if (!mencionado) return message.reply('You need to select someone.');
            if (!razon) return message.channel.send('Please specify a reason.');

            message.guild.members.ban(mencionado, { reason: razon });
            message.channel.send(`**${mencionado.username}**, has been banned from the server for the reason of: ${razon}.`);


        }
    }


    if (command === "clear") {

        let cantidad = parseInt(args[0]);
        let permiso = message.member.hasPermission("MANAGE_MESSAGES");
        if (!permiso) {
            message.channel.send(`You dont have permissions to do this.`);
        } else {
            if (!cantidad) return message.reply('You need to specify the number of messages you want to delete.');
            message.channel.bulkDelete(cantidad);
            message.channel.send(`${cantidad} messages have been deleted.`);
        
     
        }
    }
    if (command === '8ball') {

        let texto = args.join(" ");

        var rpts = ["Yes", "No", "Maybe", "I dont know", " Sure! ", " Yes ", " No ", " Obviously! ", " Obviously not "];
        if (!texto) return message.reply(` Write a question.`);
        message.channel.send(' for your question `' + texto + '` my answer is: `' + rpts[Math.floor(Math.random() * rpts.length)] + '`');

    }


    if (command === 'avatar') {

        let img = message.mentions.users.first()
        if (!img) {

            const embed = new Discord.MessageEmbed()
                .setImage(`${message.author.displayAvatarURL()}`)
                .setColor(0x66b3ff)
                .setFooter(`Avatar of ${message.author.tag}`);
            message.channel.send({ embed });

        } else if (img.avatarURL === null) {

            message.channel.sendMessage("El usuario (" + img.username + ") no tiene avatar!");

        } else {

            const embed = new Discord.MessageEmbed()
                .setImage(`${img.displayAvatarURL()}`)
                .setColor(0x66b3ff)
                .setFooter(`Avatar of ${img.tag}`);

            message.channel.send(embed);

        };

    }    




    if (command === 'ping') {

        let ping = Math.floor(message.client.ping);

        message.channel.send(":ping_pong: Pong!")
            .then(m => {

                m.edit(`:incoming_envelope: Messages Ping: \`${Math.floor(m.createdTimestamp - Date.now())} ms\`\n:satellite_orbital: DiscordAPI Ping: \`${ping} ms\``);

            });

    }
});
client.login(config.TOKEN);