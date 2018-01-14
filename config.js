module.exports = {

	name: "Syke's Scheduler",
	prefix:  "@Syke's Scheduler",
	readable_prefix: "@Syke's Scheduler",

	// Admin app settings
	admin_app: {
		desc: "ScheduleBot admin commands",
		prefix: "schedulebot-admin"
	},

	// The master channel
	// The bot will announce the events to this channel. It won't listen to other channels.
	master_channel: "scheduling",
	happening_margin: 60000 * 5, // In milliseconds
	update_interval: 60000, // In milliseconds
	default_timezone: "Europe/London",

	// If this option is enabled, the bot will delete the message that triggered it, and its own
	// response, after the specified amount of time has passed.
	// Enable this if you don't want your channel to be flooded with bot messages.
	// ATTENTION! In order for this to work, you need to give your bot the following permission:
	// MANAGE_MESSAGES - 	0x00002000
	// More info: https://discordapp.com/developers/docs/topics/permissions
	delete_after_reply: {
		enabled: true,
		time: 60000, // In milliseconds
	},

	// If true, it will delete any message that is not a command from the master channel.
	// Leave this on to keep your master channel tidy.
	// This also requires the "manage messages" permission
	disallow_talking: false,

	db: {
		"user": "uwsgzgxlqbhepq",
		"password": "eb7205b86d1033cd789359bd01a1d4c62021bdbffec7aa30bb9552b35356cf20",
		"host": "ec2-54-217-243-160.eu-west-1.compute.amazonaws.com",
		"database": "d8e0htsu96425c"
	}
};

// "Add to server" link:
// https://discordapp.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=0x00002000
