import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
    items: {
        type: Array,
        default: []
    },
    totalQuantity: {
        type: Number,
        default: 0
    }
}, {timestamps: true})

export default mongoose.model('cart', cartSchema)