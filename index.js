const express = require('express');
const login = require('fca-rk-prajapat'); // Aapka library name
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Command aur Event setup
global.client = { commands: new Map(), events: new Map() };

// Command Loader
const loadCommands = () => {
    const files = fs.readdirSync('./Priyansh/commands').filter(f => f.endsWith('.js'));
    for (const file of files) {
        const cmd = require(`./Priyansh/commands/${file}`);
        global.client.commands.set(cmd.config.name, cmd);
    }
};

// Event Loader
const loadEvents = () => {
    const files = fs.readdirSync('./Priyansh/events').filter(f => f.endsWith('.js'));
    for (const file of files) {
        const ev = require(`./Priyansh/events/${file}`);
        global.client.events.set(ev.config.name, ev);
    }
};

loadCommands();
loadEvents();
console.log("✅ Commands and Events loaded!");

app.get('/', (req, res) => res.send("Bot is running!"));
app.listen(port, () => console.log(`Server running on port ${port}`));

const appState = JSON.parse(fs.readFileSync('appstate.json', 'utf8'));

login({ appState }, (err, api) => {
    if (err) return console.error(err);

    api.listenMqtt((err, message) => {
        if (err) return console.error(err);

        // 1. Prefix Command Execution
        if (message.body && message.body.startsWith('.')) {
            const args = message.body.slice(1).trim().split(/ +/);
            const cmdName = args.shift().toLowerCase();
            if (global.client.commands.has(cmdName)) {
                global.client.commands.get(cmdName).onStart({ api, message, args });
            }
        }

        // 2. Event Execution (Join/Leave/Nickname)
        if (message.logMessageType) {
            global.client.events.forEach(event => {
                if (event.config.eventType.includes(message.logMessageType)) {
                    event.onStart({ api, event: message });
                }
            });
        }
    });
});
