module.exports = {
  config: {
    name: "owner",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "RK Prajapat",
    description: "Owner details",
    commandCategory: "Info",
    usages: ".owner",
    cooldowns: 5
  },
  onStart: async function({ api, event }) {
    const ownerID = "61573328623221"; // Jo aapke config me hai
    const msg = `👑 𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎 👑\n\n` +
                `👤 Name: RK Prajapat\n` +
                `🆔 Owner UID: ${ownerID}\n` +
                `🌍 Github: https://github.com/radha8094\n\n` +
                `Direct contact karne ke liye bio check karein! ❤️`;
    return api.sendMessage(msg, event.threadID, event.messageID);
  }
};
