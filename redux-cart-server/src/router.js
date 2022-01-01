import express from 'express'
const router = express.Router()
import CartRoute from './controllers/cart.controller.js'

router.all('/api/:method/:action', (req, res) => {
    const { method, action } = req.params
    const body = {
        payload: req.body,
        method,
        action
    }
    switch (method) {
        case 'cart':
            const cart = new CartRoute(body)
            cart.response()
                .then(response => {
                    res.send(response)
                })
                .catch(e => {
                    res.status(500).send(e)
                })
            break
        default:
            res.status(500).send('Route not found')
    }
})

export default router