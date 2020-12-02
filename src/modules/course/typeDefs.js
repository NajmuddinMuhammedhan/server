const { gql } = require('apollo-server-express')

module.exports = gql `
	type Course {
		id: ID!
		name: String!
		description: String!
		isOpen: Boolean!
	}

	extend type Query {
		courses(page: Number, size: Number): [Course!]!
	}
`
