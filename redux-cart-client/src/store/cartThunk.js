import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.notification({
            status: 'pending',
            title: 'Pending..',
            message: 'Sending cart data!'
        }))
        const setCartData = async () => {
            const response = await fetch('http://localhost:3001/api/cart/update-one', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    criteria: {
                        _id: cart._id
                    },
                    data: {
                        items: cart.items,
                        totalQuantity: cart.totalQuantity
                    }
                })
            })
            if (!response.ok) {
                throw new Error('')
            }
        }
        try {
            await setCartData()
            dispatch(uiActions.notification({
                status: 'success',
                title: 'Success!',
                message: 'Successfully cart data sent.'
            }))
        } catch (e) {
            dispatch(uiActions.notification({
                status: 'error',
                title: 'Error!!',
                message: 'Something went wrong.'
            }))
        }
    }
}

export const fetchCartData = (cart) => {
    return  dispatch => {
        const fetchData = async () => {
            const response = await fetch(
                'http://localhost:3001/api/cart/find-one', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    criteria: {
                        _id: cart._id
                    },
                    fields: 'items totalQuantity'
                })
            })
            if(!response.ok){
                throw new Error()
            }
            const data  = await response.json()
            return data
        }
        fetchData()
        .then(data => {
            dispatch(cartActions.replaceCart(data))
        })
        .catch(e => {
            dispatch(uiActions.notification({
                status: 'error',
                title: 'Error!!',
                message: 'Something went wrong.'
            }))
        })
    }
}