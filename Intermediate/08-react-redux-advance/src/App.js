import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const cart = useSelector(state => state.cart);
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  useEffect(()=>{
    fetch('https://react-app-610ea-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
      method: 'PUT', 
      body: JSON.stringify(cart),
      headers: {
        'Content-Type': 'Application/JSON'
      }
    });
  }, [cart]);
  return (
    <Layout>
      {!cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
