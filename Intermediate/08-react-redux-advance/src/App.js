import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendDataCart } from './store/cart';
let isInitial = true;

function App() {
  const cart = useSelector(state => state.cart);
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);
  
  useEffect(()=>{

      if(isInitial){
        isInitial = false;
        return;
      }
  
    dispatch(sendDataCart(cart));
  }, [cart, dispatch]);


  return (
    <Fragment>
      {notification && <Notification status={notification.status} message={notification.message} title={notification.title}/>}
    <Layout>
      {!cartIsVisible && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
