const express = require('express')
const router = express.Router()

const passport = require('../../config/passport')

const { captureChangeAvailabilityParams, changeAvailability, changeAvailabilityResultOk } = require('../private/handlers/changeAvailability')

router.use(passport.authenticate('jwt', { session: false }))

router.put('/user/availability', captureChangeAvailabilityParams, changeAvailability, changeAvailabilityResultOk)

module.exports = router
