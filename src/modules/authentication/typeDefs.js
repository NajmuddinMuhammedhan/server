const { gql } = require('apollo-server-express')

module.exports = gql `
	type Access {
		token: String!
		user: User!
	}
	extend type Mutation {
		createToken(username: String!, password: String!): Access!
	}
`
