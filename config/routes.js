const express = require('express')
const router = express.Router()
const contactsController = require('../app/controllers/contactsController')
const authenticationUser = require('../app/middlewares/authenticationUser')


router.get('/',authenticationUser, contactsController.list)
router.post('/', authenticationUser, contactsController.create)
router.get('/:id', authenticationUser, contactsController.show)
router.put('/:id', authenticationUser, contactsController.update)
router.delete('/:id', authenticationUser, contactsController.destroy)

module.exports = router