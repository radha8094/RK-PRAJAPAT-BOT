module.exports = {
  config: {
    name: "pair",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "RK Prajapat",
    description: "Group me se kisi random partner ko dhundhein",
    commandCategory: "Fun",
    usages: ".pair",
    cooldowns: 10
  },
  onStart: async function({ api, event }) {
    api.getThreadInfo(event.threadID, (err, info) => {
      if (err) return;
      let ids = info.participantIDs;
      let randomUser = ids[Math.floor(Math.random() * ids.length)];
      
      api.getUserInfo(randomUser, (err, userInfo) => {
        if (err) return;
        let name = userInfo[randomUser].name;
        return api.sendMessage(`❤️ | RK-Bot Matchmaker:\nAapka perfect partner mil gaya hai: ${name} ✨!`, event.threadID, event.messageID);
      });
    });
  }
};
