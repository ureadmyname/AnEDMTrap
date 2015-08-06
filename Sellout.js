bot.commands.selloutCommand = {
command: 'sellout',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me QTbot is going sellout mode! Interested in being a manager for life? Check out this link! http://git.io/vOSC2");}}};
