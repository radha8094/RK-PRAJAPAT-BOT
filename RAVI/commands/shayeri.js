module.exports = {
  config: {
    name: "shayeri",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "RK Prajapat",
    description: "Random beautiful shayeri",
    commandCategory: "Fun",
    usages: ".shayeri",
    cooldowns: 3
  },
  onStart: async function({ api, event }) {
    const shayeris = [
      "Teri saadgi ko dekh kar hi toh fida hain hum,\nWarna husn wale toh hazaro hain is jahan me. ❤️",
      "Dhadkano ko bhi kuch sukoon mil jata hai,\nJab aapka chehra is khwab me chha jata hai. ✨",
      "Dil ke paas aapka hi toh bas thikana hai,\nSari duniya chhod kar hume aapki dosti me aana hai. 🌹"
    ];
    const random = shayeris[Math.floor(Math.random() * shayeris.length)];
    return api.sendMessage(random, event.threadID, event.messageID);
  }
};
