const model = require('./model')

module.exports = {
	Course: {
		id: global => global.course_id,
		name: global => global.course_name,
		description: global => global.course_description,
		isOpen: global => global.course_isopen,
	},
	Query: {
		courses: async (_, args) => model.many(args)
	},
}
