module.exports = {
  config: {
    name: "bot",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "RK Prajapat",
    description: "Bot reply on text",
    commandCategory: "NoPrefix",
    usages: "bot",
    cooldowns: 2
  },
  onChat: async function({ api, event }) {
    if (!event.body) return;
    if (event.body.toLowerCase() === "bot") {
      return api.sendMessage("Ji RK bhai, boliye! Main active hoon. 🤖✨", event.threadID, event.messageID);
    }
  },
  onStart: async function({ api, event }) {
    return api.sendMessage("Chat me direct 'bot' likhein!", event.threadID, event.messageID);
  }
};
