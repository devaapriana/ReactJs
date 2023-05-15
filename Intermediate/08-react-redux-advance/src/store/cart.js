import { createSlice } from "@reduxjs/toolkit";
import { uiAction } from './ui';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItemToCart(state, action){
            const newItem = action.payload;

            let existingItem = state.items.find(item => item.id == newItem.id);

            state.totalQuantity++;

            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    title: newItem.title,
                    totalPrice: newItem.price
                });
            }else{
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
                existingItem.quantity++;
            }
        },

        removeItemToCart(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id == id);
            state.totalQuantity--;

            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

export const sendDataCart = (cart) => {
    
    return async (dispatch) => {
        dispatch(uiAction.setNotification({
            status: 'pending',
            title: 'Pending',
            message: 'Sent data pending'
          }));

        const asyncFunc = async () => {
    
            const response = await fetch('https://react-app-610ea-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
            method: 'PUT', 
            body: JSON.stringify(cart)
          });
      
          const result = await response.json();

          if(!response.ok){
            throw new Error('Sending data failed');
          }
        

         }      

         try{
            await asyncFunc();

            dispatch(uiAction.setNotification({
                status: 'success',
                title: 'Success',
                message: 'Sent data successfully'
              }));

         }catch(error){
              dispatch(uiAction.setNotification({
                status: 'error',
                title: 'Error',
                message: 'Sent data is failed'
            }));
         };

    }
}

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;