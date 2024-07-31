const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription('Support server of this Bot'),
    async execute(interaction) {
        const supportServerLink = "https://discord.com/invite/YAvB9Jsj3e";
        const githubLink = "https://github.com/";
        const replitLink = "https://replit.com/";
        const youtubeLink = "https://www.youtube.com/";

        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
                name: 'Support Server',
                iconURL: 'https://media.discordapp.net/attachments/1147166099394265190/1257740714398191737/modverse.jpeg?ex=66aa6bd2&is=66a91a52&hm=23ac2cd42637b92174322872d391b3d48688a98941628bf2c57c894e30ab5d0b&',
                url: 'https://discord.com/invite/YAvB9Jsj3e'
            })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- GitHub - ${githubLink}\n- Replit - ${replitLink}\n- YouTube - ${youtubeLink}`)
            .setImage('https://media.discordapp.net/attachments/1147166099394265190/1257740714398191737/modverse.jpeg?ex=66aa6bd2&is=66a91a52&hm=23ac2cd42637b92174322872d391b3d48688a98941628bf2c57c894e30ab5d0b&')
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};
