// BUILD YOUR SERVER HERE
const express = require('express')
const User = require('./users/model')
const server = express()
module.exports = server; // EXPORT YOUR SERVER instead of {}
server.get('/api/users', (req, res) => {
    User.find()
    .then(users => {
        console.log(users)
        res.json(users)
        // res.status(200).json(dogs)
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ 
            message: 'error getting users',
            err: err.message })
      })
  })
  server.get('/api/users/:id', (req, res) => {
    User.findById(req.params.id)
    .then(user => {
        if(!user){
            res.status(404).json({
            message: "The user with the specified ID does not exist",
         })
        }
         console.log(user)
        res.json(user)
        // res.status(200).json(dogs)
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ 
            message: 'error getting user',
            err: err.message })
      })
  })
