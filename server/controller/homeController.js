const axios = require('axios')
const { response } = require('express')

function homeController() {
    return {
        index(req, res) {
            axios.get('http://localhost:500/api/featured')
                .then(influencer => {
                    axios.get('http://localhost:500/api/isfeatured')
                    .then(client=>{
                        res.render('index', { tittle: 'Admin - Dashboard', influencerData: influencer.data, clientData : client.data })
                    })
                }).catch(err => {
                    console.log(err);
                })
        },
        adminLogin(req, res) {
            res.render('login')
        },
        adminRegister(req, res) {
            res.render('register')
        },
        adminDashboard(req, res) {
            res.render('dashboard')
        },
        influencer(req, res) {
            axios.get('http://localhost:500/api/find')
                .then(response => {
                    res.render('influencers/index', { tittle: 'Admin - Dashboard', influencer: response.data })
                }).catch(err => {
                    console.log(err)
                })
        },
        influencer_create(req, res) {
            res.render('influencers/create', { influencer: response.data } )
        },
        influencer_edit(req, res) {
            axios.get('http://localhost:500/api/find',{params:{id:req.query.id}})
                .then(response => {
                    res.render('influencers/edit', { data: response.data } )
                }).catch(err => {
                    console.log(err)
                })
        },
        client(req, res) {
            axios.get('http://localhost:500/api/get')
                .then(response => {
                    res.render('clients/index', { client: response.data })
                }).catch(err => {
                    console.log(err)
                })
        },
        client_create(req, res) {
            res.render('clients/create', { client: response.data } )
        },
        client_edit(req, res) {
            axios.get('http://localhost:500/api/get',{params:{id:req.query.id}})
                .then(response => {
                    res.render('clients/edit', { data: response.data } )
                }).catch(err => {
                    console.log(err)
                })
        },


        adminAbout(req, res) {
            axios.get('http://localhost:500/api/pages/find')
                .then(response => {
                    console.log(response.data)
                    res.render('pages/about/index', { aboutPage: response.data })
                }).catch(err => {
                    console.log(err)
                })
        },
        adminAboutEdit(req,res){
            axios.get('http://localhost:500/api/pages/find',{params:{id:req.query.id}})
                .then(response => {
                    res.render('pages/about/edit', { data: response.data } )
                }).catch(err => {
                    console.log(err)
                })
        }
    }
}

module.exports = homeController