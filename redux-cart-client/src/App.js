import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { sendCartData, fetchCartData } from './store/cartThunk';
import Notification from './components/UI/Notification';

let initial = true

function App() {
  const { cartIsVisible, notification } = useSelector((state) => state.ui);
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const { _id } = cart
  useEffect(() => {
    dispatch(fetchCartData(_id))
  }, [dispatch, _id])

  useEffect(() => {
    if (initial) {
      initial = !initial
      return;
    }
    if (cart.isChanged) {
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch])
  return (
    <>
      {notification && <Notification {...notification} />}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
