const passport = require('passport')
const LocalStrategy = require('passport-local')
const influencer = require('../model/influencer')
const bcrypt = require('bcryptjs')
const db = require('../database/connectdb')

 function init(){
  passport.use(new LocalStrategy({usernameField: 'username'},async (username,password,done)=>{
    // Login 
    //check if Eamil exists
    const admin = {username: username , password: password}
    const data = await db.query('SELECT * FROM login where usename=?',username, function (error, data, fields) {  if (error) throw error;  
        res.send(data) });
    if(!data){
        return done(null, false ,{message: 'User Not Found'})
    }
    
    bcrypt.compare(password,password).then(match =>{
        if(match){
            return done(null,user,{message: 'Logged in succesfully'})
        }
        return done(null, false ,{message: 'Wrong username or password'})
    }).catch(err=>{
        return done(null,false,{message: 'Something went wrong'})
    })

    }))

  passport.serializeUser((user,done)=>{
    done(null,user.id)
  })

  passport.deserializeUser((id,done)=>{
    db.query('SELECT * FROM login where id=?',id,function (error, data, fields) { 
        if(error) throw error;  
        done(data)
  })
  })
 }

module.exports = init