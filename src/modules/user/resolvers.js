const model = require('./model')

module.exports = {
	User: {
		id: global => global.user_id,
		username: global => global.user_username,
		role: global => global.user_role,
		joined: global => global.user_joined,
	},
	Query: {
		users: async (_, args, { verify, accessToken }) => {
			try {
				await verify(accessToken)
				return model.many(args)
			}
			catch(error) {
				throw error
			}
		},
	},
	Mutation: {
		signUp: async (_, { input }, { sign }) => {
			const user = await model.signUp(input)
			return {
				token: sign({
					id: user.user_id,
					username: user.user_username,
					role: user.user_role,
				}),
				user,
			}
		}
	},
}
