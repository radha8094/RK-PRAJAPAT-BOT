module.exports = {
  config: {
    name: "help",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "RK Prajapat",
    description: "Bot ki commands list",
    commandCategory: "System",
    usages: ".help",
    cooldowns: 5
  },
  onStart: async function({ api, event }) {
    const msg = "🌟 𝐑𝐊-𝐏𝐑𝐀𝐉𝐀𝐏𝐀𝐓-𝐁𝐎𝐓 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 🌟\n\n" +
                "1. .help - Show this menu\n" +
                "2. .info - Bot status & system details\n" +
                "3. .owner - Owner contact info\n" +
                "4. .emoji [text] - Text to emoji font\n" +
                "5. .pair - Pair with a random group member\n" +
                "6. .shayeri - Get a random romantic shayeri\n" +
                "7. bot (No prefix) - Quick chat response\n\n" +
                "⚡ Type commands correctly with prefix [ . ]";
    return api.sendMessage(msg, event.threadID, event.messageID);
  }
};
