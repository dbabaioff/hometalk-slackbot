var Bot = require('slackbots');

const CONFIG = JSON.parse(fs.readFileSync(__dirname + '/config.json', 'utf8'));

// create a bot
var settings = {
    token: CONFIG.token,
    name: CONFIG.name
};
var bot = new Bot(settings);

bot.on('start', function() {
    //bot.postMessageToChannel('some-channel-name', 'Hello channel!');
    bot.postMessageToUser('davidb', 'hello bro!');
    //bot.postMessageToGroup('some-private-group', 'hello group chat!');
});
