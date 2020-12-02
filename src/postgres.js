const { Pool } = require('pg')

const pool = new Pool({ connectionString: 'postgres://apzxorvb:_MbxnhI9w4Z2gdNwlkSkS-pM90ohC78V@arjuna.db.elephantsql.com:5432/apzxorvb', })

const fetch = async (SQL, ...params) => {
	const client = await pool.connect()
	try {
		const { rows: [row] } = await client.query(SQL, params.length ? params : null)
		return row
	}
	finally {
		client.release()
	}
}

const fetchAll = async (SQL, ...params) => {
	const client = await pool.connect()
	try {
		const { rows } = await client.query(SQL, params.length ? params : null)
		return rows
	}
	finally {
		client.release()
	}
}

module.exports = {
	fetch,
	fetchAll,
}