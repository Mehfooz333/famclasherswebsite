const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')


function authController() {
    return {
        adminPostLogin(req, res, next) {
            passport.authenticate('local', (err, data, info) => {
                if (err) {throw err
                return next(err)
                }
                if(!data) {
                    res.send(info.message)
                    next()
                }
                res.LogIn(user,(err)=>{
                    res.redirect('/admin')
                    next(err)
                })
            })(req,res,next)

        }
    }
}

module.exports = authController;