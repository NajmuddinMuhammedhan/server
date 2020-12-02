const jwt = require('jsonwebtoken')

const SECRET = 'SECRET'
const HOURS = 24 * 7

const sign = paylod => jwt.sign(paylod, SECRET, { expiresIn: HOURS * 60 * 60 })
const verify = token => jwt.verify(token, SECRET)

module.exports = { sign, verify }
