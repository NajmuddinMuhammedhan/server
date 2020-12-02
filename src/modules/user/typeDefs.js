const { gql } = require('apollo-server-express')

module.exports = gql `

	input SignUpInput {
		username: String!
		password: String!
	}
	type User {
		id: ID!
		username: String!
		role: Int
		joined: DateTime
	}

	extend type Query {
		users(page: Number, size: Number): [User!]!
	}

	extend type Mutation {
		signUp(input: SignUpInput!): Access!
	}
`
