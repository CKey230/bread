const router = require('express').Router()
const Bread = require('../models/bread')

//GET: get all the bread
router.get('/', (req,res) => {
    res.render('index', {
        breads: Bread
    })
   
})

// Get: create new bread page 
router.get('/new', (req,res) => {
    res.render('new')
})

//Get: get a bread by its index
// : = query parameter
router.get('/:index', (req,res) => {
    const { index } = req.params
    res.render('show', {
        bread: Bread[index]
    })

})

//Post: create a bread
router.post('/', (req,res) => {
    const { hasGluten, image } = req.body
    if(!image) req.body.image = 'https://suebeehomemaker.com/wp-content/uploads/2021/10/sliced-french-bread.jpg'
    if (hasGluten === 'on'){
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.push(req.body)
    res.redirect('/breads')

})

module.exports = router