const express = require('express')
const router = express.Router();
const homeController = require('../controller/homeController')
const authController = require('../controller/authController')

//for home
router.get('/',homeController().index)

//for admin authentication
router.get('/login',homeController().adminLogin)
router.get('/register',homeController().adminRegister)

//for admin
router.get('/admin',homeController().adminDashboard)
router.get('/admin/influencer/index',homeController().influencer)
router.get('/admin/influencer/create',homeController().influencer_create)
router.get('/admin/influencer/edit',homeController().influencer_edit)
router.get('/admin/client/index',homeController().client)
router.get('/admin/client/create',homeController().client_create)
router.get('/admin/client/edit',homeController().client_edit)

//pages
router.get('/admin/pages/about',homeController().adminAbout)
router.get('/admin/pages/about/edit',homeController().adminAboutEdit)

module.exports = router;