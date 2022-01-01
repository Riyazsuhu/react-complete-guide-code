import cartModal from '../model/cart.js'

export default class Cart {
    constructor(body) {
        this.body = body
    }
    response() {
        switch (this.body.action) {
            case 'create-one':
                return this.createOne()
            case 'update-one':
                return this.updateOne()
            case 'find-one':
                return this.findOne()
            default:
                return Promise.reject("Something went wrong!!")
        }
    }
    async createOne() {
        try {
            const cart = new cartModal(this.body.payload.data)
            await cart.save()
            return Promise.resolve("Successfully cart created")
        } catch (e) {
            return Promise.reject("Something went wrong")
        }
    }
    async findOne(){
        try{
            const cart = await cartModal.findOne(this.body.payload?.criteria, this.body.payload?.fields)
            return Promise.resolve(
                cart
            )
        }catch(e){
            return Promise.reject('Something went wrong!!')
        }
    }
    async updateOne() {
        try {
            const cart = await cartModal.updateOne(this.body.payload.criteria, { $set: this.body.payload.data }, { new: true })
            return Promise.resolve("Successfully updated")
        } catch (e) {
            return Promise.reject("Something went wrong")
        }
    }
}