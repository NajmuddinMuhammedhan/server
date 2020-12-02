const { fetchAll } = require('../../postgres')

const COURSES = `
	SELECT
		course_id,
		course_name,
		course_description,
		course_isopen
	FROM
		courses
	OFFSET $1 ROWS FETCH FIRST $2 ROW ONLY
`

const many = ({ page = 1, size = 100, }) => fetchAll(COURSES, (page - 1) * size, size)

module.exports = {
	many,
}
