const express = require('express')
const pessoasController = require('../controllers/pessoas')


const pessoasRouter = () => {
    const router = express.Router()
    router.get('/',pessoasController.index)
    return router
}

module.exports = {
    pessoasRouter
}