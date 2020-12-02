const { fetch } = require('../../postgres')

const USERS = `
	SELECT
		user_id,
		user_username,
		user_role,
		user_joined
	FROM
		users
	WHERE
		lower(user_username) = $1 and
		user_password = crypt($2, user_password)
`

const authentication = ({ username, password }) => fetch(USERS, username, password)

module.exports = {
	authentication,
}
