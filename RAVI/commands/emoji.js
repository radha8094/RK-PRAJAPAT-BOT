module.exports = {
  config: {
    name: "emoji",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "RK Prajapat",
    description: "Normal text ko emoji text me badle",
    commandCategory: "Fun",
    usages: ".emoji RK",
    cooldowns: 3
  },
  onStart: async function({ api, event, args }) {
    if (args.length === 0) return api.sendMessage("Sath me koi text likho! Eg: .emoji RK", event.threadID, event.messageID);
    let text = args.join(" ").toLowerCase();
    let emojiMap = { 'a': '🅰️', 'b': '🅱️', 'c': '🆂', 'r': '🆁', 'k': '🅺' }; // Aap extend kar sakte ho
    let result = text.split("").map(char => emojiMap[char] || char).join(" ");
    return api.sendMessage(`✨ Modified Text:\n${result}`, event.threadID, event.messageID);
  }
};
