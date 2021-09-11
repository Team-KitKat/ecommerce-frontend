import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './store'
import { IOrderCheckout} from "../types/MainTypes";

// Define a type for the slice state
interface ProductState {
    value: IOrderCheckout[]
}

// Define the initial state using that type
const initialState: ProductState = {
    value: []

}

export const checkoutProductSlice = createSlice({
    name: 'product',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        add: (state, action: PayloadAction<IOrderCheckout>) => {
            const newProduct:IOrderCheckout = {
                id: action.payload.id,
                image: action.payload.image,
                name: action.payload.name,
                category: action.payload.category,
                qty: action.payload.qty,
                price: action.payload.price,
                discount: action.payload.discount,
                total: action.payload.total,
                c_qty: action.payload.c_qty
            }
            state.value.push(newProduct);
        },
        deleteProduct: (state, action: PayloadAction<IOrderCheckout>) => {
            state.value = (state.value.filter(product => product.id !== action.payload.id))
        },
        updateCheckedProducts:(state, action: PayloadAction<IOrderCheckout>)=>{
            // state.value=state.value.map(product => product.id == action.payload.id ? {...product, qty: action.payload.qty} : product)
            state.value=state.value.map(product =>  product.id == action.payload.id ?  action.payload : product );
            console.log(state.value);
        }


    },
})

export const {add, deleteProduct, updateCheckedProducts} = checkoutProductSlice.actions
// Other code such as selectors can use the imported `RootState` type
export const productState = (state: RootState) => state.products

export default checkoutProductSlice.reducer