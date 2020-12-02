const http = require('http')
const { ApolloServer, gql } = require('apollo-server-express')
const express = require('express')
const cors = require('cors')
const { sign, verify } = require('./jsonwebtoken')

const PORT = process.env.PORT || 4010

const app = express()

app.get('/', (req, res) => {
	res.json({ name: '© Abu Hanifa International Islam Academy. [Graphql Service]', })
})

app.use(cors())

const modules = require('./modules')

const server = new ApolloServer({
	modules,
	context: ({ connection, req }) => {
		return connection ? connection.context : {
			sign,
			verify,
			accessToken: req.headers.access_token || null,
		}
	},
	subscriptions: {
		onConnect: (connectionParams, webSocket, context) => {},
		onDisconnect: (webSocket, context) => {},
	},
})

server.applyMiddleware({ app, path: '/graphql' })

const httpServer = http.createServer(app)

server.installSubscriptionHandlers(httpServer)

httpServer.listen({ port: PORT }, () => {
	console.log('https://localhost:' + PORT + server.graphqlPath)
	console.log('wss://localhost:' + PORT + server.subscriptionsPath)
})
