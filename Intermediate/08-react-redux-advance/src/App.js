import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiAction } from './store/ui';

const isInitial = true;

function App() {
  const cart = useSelector(state => state.cart);
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);
  
  useEffect(()=>{
    const asyncFunc = async () => {
      console.log(cart);
    dispatch(uiAction.setNotification({
      status: 'pending',
      title: 'Pending',
      message: 'Sent data pending'
    }));

      const response = await fetch('https://react-app-610ea-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
      method: 'PUT', 
      body: JSON.stringify(cart)
    });

    const result = await response.json();

    if(!response.ok){
      throw new Error('Sending data failed');
    }
  
      dispatch(uiAction.setNotification({
        status: 'success',
        title: 'Success',
        message: 'Sent data successfully'
      }));
    
      if(isInitial){
        isInitial = false;
        return;
      }
      
    asyncFunc().then((error) => {
      dispatch(uiAction.setNotification({
        status: 'error',
        title: 'Error',
        message: 'Sent data is failed'
      }));
    })
    }
    
  }, [cart]);


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
