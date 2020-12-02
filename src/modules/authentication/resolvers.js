const model = require('./model')

module.exports = {
	Mutation: {
		createToken: async (_, args, { sign }) => {
			try {
				const user = await model.authentication(args)
				if (!user) throw 'Xatolik bor, qaytadan urunib ko\'ring'
				return {
					user,
					token: sign({
						id: user.user_id,
						username: user.user_username,
						role: user.user_role,
					})
				}
			}
			catch(error) {
				throw new Error(error)
			}
		},
	},
}
