const router = require('express').Router()
const Bread = require('../models/bread')

//GET: get all the bread
router.get('/', (req,res) => {
    res.render('index', {
        breads: Bread
    })
    //res.send(Bread)
})

//Get: get a bread by its index
// : = query paramter
router.get('/:index', (req,res) => {
    const { index } = req.params
    res.render('show', {
        bread: Bread[index]
    })

})

module.exports = router