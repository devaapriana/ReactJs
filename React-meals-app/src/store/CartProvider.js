import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartItems = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){

        let existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
        let existingItem = state.items[existingItemIndex];
        
        let updatedItems;

        if(existingItem){
            let updatedItem = {
                ...existingItem, amount: existingItem.amount + action.item.amount};
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        }else{
            updatedItems = state.items.concat(action.item);
        }

        const newTotalAmount = state.totalAmount + action.item.amount * action.item.price;
        
        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        };
    }

    if(action.type == 'REMOVE'){
        let updatedTotalAmount = state.totalAmount;
        let existingItemIndex = state.items.findIndex(item => item.id === action.id);
        let existingItem = state.items[existingItemIndex];
        let updatedItems;
        updatedTotalAmount = updatedTotalAmount - existingItem.price;

        if(existingItem.amount === 1){
            updatedItems = state.items.filter(item => item.id != action.id);
        }else{
            updatedItems = [...state.items];
            updatedItems[existingItemIndex].amount -= 1; 
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
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
        items: cartState.items,
        totalAmount: cartState.totalAmount,
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