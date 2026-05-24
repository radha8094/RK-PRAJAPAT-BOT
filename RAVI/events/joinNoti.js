module.exports = {
  config: {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.0",
    credits: "RK Prajapat",
    description: "Group join karne par welcome message"
  },
  onStart: async function({ api, event }) {
    const { threadID, logMessageData } = event;
    if (logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
      return api.sendMessage("🤖 ♡⎯᪵𝆭⎯꯭᪳✫꯭🎸꯭≛⃝𝐑𝐊-𝐏𝐑𝐀𝐉𝐀𝐏𝐀𝐓 Connected Successfully!\nPrefix is: [ . ]", threadID);
    } else {
      let names = logMessageData.addedParticipants.map(i => i.fullName).join(", ");
      return api.sendMessage(`✨ Welcome ${names} to our group! Enjoy your stay here. ❤️`, threadID);
    }
  }
};
