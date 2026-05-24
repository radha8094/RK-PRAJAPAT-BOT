module.exports = {
  config: {
    name: "info",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "RK Prajapat",
    description: "Bot system configuration status",
    commandCategory: "Info",
    usages: ".info",
    cooldowns: 5
  },
  onStart: async function({ api, event }) {
    const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    const msg = `📊 𝐁𝐎𝐓 𝐒𝐓𝐀𝐓𝐔𝐒 📊\n\n` +
                `🤖 Name: ♡⎯᪵𝆭⎯꯭᪳✫꯭🎸꯭≛⃝𝐑𝐊-𝐏𝐑𝐀𝐉𝐀𝐏𝐀𝐓\n` +
                `⏰ System Time: ${time}\n` +
                `🔋 Host: Render Cloud\n` +
                `🟢 Status: Active (24/7 Live)`;
    return api.sendMessage(msg, event.threadID, event.messageID);
  }
};
