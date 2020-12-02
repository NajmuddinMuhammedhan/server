const { fetch, fetchAll } = require('../../postgres')

const MANY = `
	SELECT
		user_id,
		user_username,
		user_password,
		user_role,
		user_joined
	FROM
		users
	OFFSET $1 ROWS FETCH FIRST $2 ROW ONLY
`

const SIGNUP = `
	INSERT INTO users (
		user_username,
		user_password
	) values ($1, crypt($2, gen_salt('bf')))
	RETURNING
		user_id,
		user_username,
		user_role
		user_joined
`

const many = ({ page = 1, size = 100, }) => fetchAll(MANY, (page - 1) * size, size)
const signUp = ({ username, password }) => fetch(SIGNUP, username, password)

module.exports = {
	many,
	signUp,
}
