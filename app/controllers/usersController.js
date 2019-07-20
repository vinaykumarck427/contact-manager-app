const express = require('express')
const router = express.Router()
const User = require('../models/user')
const authenticationUser = require('../middlewares/authenticationUser')
const _ = require('lodash')

router.post('/register',function(req,res){
	const body = req.body
	const user = new User(body)
	user.save()
	.then(user => {
		res.json(user)
	})
	.catch(err => {
		res.send(err)
	})
})
router.get('/',function(req,res){
	User.find()
	.then(users => {
		res.json(users)
	})
	.catch(err => {
		req.send(err)
	})
})

router.post('/login',function(req,res){
	const body = req.body
	User.findByCredentials(body.email,body.password)
	.then(user => {
		return user.generateToken()
	})
	.then(token =>{
		res.send({token:token})
	})
	.catch(err => {
		res.json({err,errors:{message:"invalid login"}})
	})
})
router.get('/account', authenticationUser, function(req,res) {
	const {user} = req
	res.send(_.pick(user,['_id','name','email']))
})
router.delete('/logout',authenticationUser,function(req,res){
	const {user,token} = req
	User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
	.then(() => {
			res.send({notice:'successfully logged out'})
	})
	.catch(err => {
			res.send(err)
	})
})
module.exports = router