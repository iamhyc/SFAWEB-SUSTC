module.exports = {
	cookieSecret: "SFA@SUSTC",
	db: 'SFA',
	host: 'localhost',
	serverOptions:{
		'auto_reconnect':true,
		poolSize:10,
	},
	dbOptions:{
		safe:true,
	}
}