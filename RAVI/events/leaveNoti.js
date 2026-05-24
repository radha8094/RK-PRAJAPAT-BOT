module.exports = {
  config: {
    name: "leaveNoti",
    eventType: ["log:unsubscribe"],
    version: "1.0.0",
    credits: "RK Prajapat",
    description: "Group leave karne par notification"
  },
  onStart: async function({ api, event }) {
    const { threadID, logMessageData } = event;
    if (logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
    
    api.getUserInfo(logMessageData.leftParticipantFbId, (err, userInfo) => {
      if (err) return;
      const name = userInfo[logMessageData.leftParticipantFbId].name;
      return api.sendMessage(`👋 Alvida ${name}! Group se jaane ke liye shukriya. 😢`, threadID);
    });
  }
};
