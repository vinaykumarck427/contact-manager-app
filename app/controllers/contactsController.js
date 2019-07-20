const Contact = require('../models/contact')

module.exports.list = function (req, res) {
    const {user} = req
    Contact.find({
        user:user._id
    })
        .then((contacts) => {
            res.json(contacts)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    console.log(req.user)
    const {user} = req
    const body = req.body
    const contact = new Contact(body)
    contact.user=user._id
    contact.save()
        .then(contact => {
            res.json(contact)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const {user} = req
    const id = req.params.id
    Contact.findOne({
            _id:id,
            user:user._id
    })
        .then(contact => {
            res.json(contact)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const {user} = req
    const id = req.params.id
    const body = req.body
    Contact.findOneAndUpdate({
        _id:id,
        user:user._id
    }, { $set: body }, { new: true })
        .then(contact => {
            res.json(contact)
        })
        .catch((err) => {
            res.json(err)
        })
}
module.exports.destroy = (req, res) => {
    const {user} = req
    const id = req.params.id
    Contact.findOneAndDelete({
        _id:id,
        user:user._id
    })
        .then((contact) => {
            res.json(contact)
        })
        .catch((err) => {
            res.json(err)
        })
}



// app.get('/contacts', (req, res) => {
//     Contact.find()
//         .then((contacts) => {
//             res.json(contacts)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// })

// // post contacts 
// app.post('/contacts', (req, res) => {
//     const body = req.body
//     const contact = new Contact(body)
//     contact.save()
//         .then((contact) => {
//             res.json(contact)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// })

// app.get('/contacts/:id', (req, res) => {
//     const id = req.params.id
//     Contact.findById(id)
//         .then(contact => {
//             res.json(contact)
//         })
//         .catch(err => {
//             res.json(err)
//         })
// })

// app.delete('/contacts/:id', (req, res) => {
//     const id = req.params.id
//     Contact.findByIdAndDelete(id)
//         .then(contact => {
//             res.json(contact)
//         })
//         .catch(err => {
//             res.json(err)
//         })
// })
// app.put('/contacts/:id', (req, res) => {
//     const id = req.params.id
//     const body = req.body
//     Contact.findByIdAndUpdate(id, { $set: body }, { new: true })
//         .then(contact => {
//             res.json(contact)
//         })
//         .catch(err => {
//             res.json(err)
//         })
// })