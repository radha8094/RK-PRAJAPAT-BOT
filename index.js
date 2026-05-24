const express = require("express");
const login = require("fca-rk-prajapat");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("<h2>RK-PRAJAPAT Official Bot is fully operational! 🚀</h2>");
});

app.listen(port, () => {
    console.log(`[ SERVER ] Web Server listening on port ${port}`);
});

const appStatePath = path.join(__dirname, "appState.json");
if (!fs.existsSync(appStatePath)) {
    fs.writeFileSync(appStatePath, "[]", "utf8");
}

const appState = JSON.parse(fs.readFileSync(appStatePath, "utf8"));

login({ appState: appState }, (err, api) => {
    if (err) {
        console.error("[ ERROR ] Login verification failed:", err);
        return;
    }

    console.log("\n==========================================");
    console.log("🚀 RK-PRAJAPAT MESSENGER BOT IS NOW ONLINE!");
    console.log("==========================================\n");

    api.listenMqtt((err, message) => {
        if (err) return console.error("[ MQTT ERROR ]", err);

        if (message.body) {
            const msgIn = message.body.toLowerCase().trim();

            if (msgIn === "hi" || msgIn === "hello") {
                api.sendMessage("Hello! Main RK Prajapat ka official automated custom bot hoon. 😎", message.threadID);
            } else if (msgIn === "owner" || msgIn === "boss") {
                api.sendMessage("Mere malik ka naam RK Prajapat hai! 👑", message.threadID);
            } else if (msgIn === "time") {
                const currentIndiaTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' });
                api.sendMessage(`Abhi sahi samay ho raha hai: ${currentIndiaTime} 🕒`, message.threadID);
            }
        }
    });
});
