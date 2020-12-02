const { gql } = require('apollo-server-express')

module.exports = gql `

	scalar Date
	scalar DateTime
	scalar Number

	type Server {
		version: Float!
	}
	extend type Query {
		server: Server!
	}
`
