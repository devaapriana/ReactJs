import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../../store/ui';
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const productQty = useSelector(state => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiAction.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{productQty}</span>
    </button>
  );
};

export default CartButton;
