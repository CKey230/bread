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

//GET: edit bread page 
router.get('/:index/edit', (req,res) => {
    const { index } = req.params
    const bread = Bread[index]
    res.render('edit', {
        bread,
        index
    })
})

//Get: get a bread by its index
// : = query parameter
router.get('/:index', (req,res) => {
    const { index } = req.params
    res.render('show', {
        bread: Bread[index],
        index
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

router.put('/:index', (req,res) => {
    const { index } = req.params
    const { image,hasGluten} = req.body
    if(!image) req.body.image = 'https://suebeehomemaker.com/wp-content/uploads/2021/10/sliced-french-bread.jpg'
    if (hasGluten === 'on'){
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }

    Bread[index] = req.body
    res.redirect(`/breads/${index}`)
})

//Delete a bread 
router.delete('/:index', (req,res) => {
    const { index } = req.params
    const numIndex = Number(index)
    Bread.splice(numIndex, 1)
    res.status(303).redirect('/breads')
})

module.exports = router