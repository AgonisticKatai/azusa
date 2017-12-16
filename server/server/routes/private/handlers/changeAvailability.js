const User = require('../../../models/User.js')

function captureChangeAvailabilityParams (req, res, next) {
  const { _id } = req.user
  const { available } = req.body
  req.data = { _id, available }
  next()
}

async function changeAvailability (req, res, next) {
  const { _id, available } = req.data
  try {
    await User.findByIdAndUpdate(_id, {
      $set: {
        available: available
      }},
      { new: true }
    )
    next()
  } catch (error) {
    const msg = 'problems in changeAvailability...'
    res.status(500).json({ error, msg })
  }
}

async function changeAvailabilityResultOk (req, res) {
  await res.status(200).json({ msg: 'availability changed properly...' })
}

module.exports = { captureChangeAvailabilityParams, changeAvailability, changeAvailabilityResultOk }
