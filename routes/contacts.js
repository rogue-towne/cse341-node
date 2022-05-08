const express = require('express')
const router = express.Router()
const Contact = require('../models/contacts')

//Gets all Contacts
router.get('/', async (req, res) => {
  try {
      const contacts = await Contact.find()
      res.json(contacts)
  } catch (err) {
      res.status(500).json({ message: err.message})
  }
})

//Gets One Contact
router.get('/:id', getContact, (req, res) => {
  res.json(res.contact)
})

//Create a Contact
router.post('/', async (req, res) => {
  const contact = new Contact({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
  })

  try {
      const newContact = await contact.save()
      res.status(201).json(newContact)
  } catch (err){
      res.status(400).json({message: err.message})
  }
})

//Update a Contact
router.put('/:id', getContact, async (req, res) => {
  if (req.body.firstName != null){
      res.contact.firstName = req.body.firstName
  }
  if (req.body.lastName != null){
    res.contact.lastName = req.body.lastName
  }
  if (req.body.email != null){
    res.contact.email = req.body.email
  }
  if (req.body.favoriteColor != null){
    res.contact.favoriteColor = req.body.favoriteColor
  }
  if (req.body.birthday != null){
    res.contact.birthday = req.body.birthday
  }
  try {
      const updatedContact = await res.contact.save()
      res.json(updatedContact)
  } catch (err){
      res.status(400).json({message: err.message})
  }
})

//Delete A Contact
router.delete('/:id', getContact, async (req, res) => {
  try {
      await res.contact.remove()
      res.json({message: "Deleted Contact"})
  } catch (err) {
      res.status(500).json({message: err.message})
  }
})

async function getContact(req, res, next) {
  let contact;
  try {
      contact = await Contact.findById(req.params.id)
      if (contact == null) {
          return res.status(404).json({message: 'Cannot find contact'})
      }
  } catch (err){
      return res.status(500).json({message: err.message})
  }
  res.contact = contact
  next()
}

module.exports = router