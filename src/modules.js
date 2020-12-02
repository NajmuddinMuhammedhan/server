const Server = require('./modules/server')
const User = require('./modules/user')
const Authentication = require('./modules/authentication')
const Course = require('./modules/course')

module.exports = [
	Server,
	User,
	Authentication,
	Course,
]
