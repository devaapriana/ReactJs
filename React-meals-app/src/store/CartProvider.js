import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartItems = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const newTotalAmount = state.totalAmount + action.amount * action.price;

        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        };
    }
    return defaultCartItems;
}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartItems);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    };
    
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;