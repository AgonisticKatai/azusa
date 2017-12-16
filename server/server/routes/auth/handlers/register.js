const User = require('../../../models/User')

async function registerUser (req, res) {
  const { username, password } = req.body
  const account = new User({ username })

  await User.register(account, password, (err, user) => {
    if (err) {
      return res.status(500).json({err})
    }
    res.status(200).json(user)
  })
}

module.exports = registerUser
