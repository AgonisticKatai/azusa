const jwt = require('jsonwebtoken')
const { SECRET } = process.env

async function login (req, res) {
  const { _id: id } = req.user
  const token = jwt.sign({ id }, SECRET)
  await res.json({ token })
}

module.exports = login
