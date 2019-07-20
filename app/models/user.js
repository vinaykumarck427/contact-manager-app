const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Schema = mongoose.Schema

const usersSchema = new Schema({
    name: {
        type:String,
        required:true,
        unique:true,
        minlength: 5
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(value) {
                validator.isEmail(value)
            },
            message: function(){
                return 'invalid email enter, please check email'
            }
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128,

    },
    tokens:[{
        token:{
            type:String
        },
        createdAt:{
            type:Date,
            default:Date.now()
        }
    }
    ]
})

usersSchema.pre('save', function(next){
    const user = this
    if(user.isNew){
        bcryptjs.genSalt(10)
        .then(function(salt){
            bcryptjs.hash(user.password,salt)
                .then((encryptedPassword) => {
                    user.password = encryptedPassword
                    next()
                })
            })
        }else{
            next()
        }
    })

usersSchema.statics.findByCredentials = function(email,password){
        const User = this

        return User.findOne({email})
        .then(function(user){
            if(!user){
                return 'invalid email/password'
            }
            return bcryptjs.compare(password, user.password)
                .then(result => {
                    if(result){
                        return Promise.resolve(user)
                    }else{
                        return Promise.reject({errors:'invalid email/password'})
                    }
                })
                .catch(function(err){
                    return Promise.reject(err)
                })
        })
        .catch(err => {
            return Promise.reject(err)
        })
}

usersSchema.methods.generateToken = function(){
    const user = this
    
    const tokenData = {
        _id:user._id,
        username:user.name,
        createdAt:Number(new Date())
    }
    const token = jwt.sign(tokenData,'jwt@123')
    user.tokens.push({token})

    return user.save()
        .then(response => {
            return Promise.resolve(token)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}

usersSchema.statics.findByToken = function(token){
    const User =  this
    let tokenData
    try{
       tokenData = jwt.verify(token,'jwt@123')
    }
    catch(err){
        return Promise.reject(err)
    }
    return User.findOne({
        _id:tokenData._id,
        'tokens.token':token
    })
}

const User = mongoose.model('User',usersSchema)
module.exports = User