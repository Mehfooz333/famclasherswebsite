const express = require('express')
const router = express.Router()
const upload = require('../helper/multer')

const controller = require('../controller/influencerController')
const { updateOne } = require('../model/influencer')
const clientController = require('../controller/clientsController')
const aboutController = require('../controller/aboutController')
const authController = require('../controller/authController')

//api routes for influencers
router.post('/api/create', upload.single('image') ,controller.create)
router.get('/api/find',controller.find)
router.get('/api/featured',controller.featured)
router.post('/api/update/:id', upload.single('image') ,controller.update)
router.get('/api/delete/:id', controller.delete)


//api routes for clients
router.post('/api/insert', upload.single('image') ,clientController.create)
router.get('/api/get',clientController.find)
router.get('/api/isfeatured',clientController.featured)
router.post('/api/change/:id', upload.single('image') ,clientController.update)
router.get('/api/destroy/:id', clientController.delete)

// //api routes for pages
router.get('/api/pages/find',aboutController.find)
router.post('/api/pages/update/:id',upload.single('image'),aboutController.update)

router.post('/login',authController().adminPostLogin)

module.exports = router