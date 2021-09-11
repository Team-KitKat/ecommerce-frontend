import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './store'
import { IProduct} from "../types/MainTypes";

// Define a type for the slice state
interface ProductState {
    value: IProduct
}

// Define the initial state using that type
const initialState: ProductState = {
    value: {
        _id: "temp...",
        image: "temp...",
        name: "temp...",
        category:  "temp...",
        qty: 1,
        price: 0,
        discount: 0,
        total: 0
    }

}

export const templateProductSlice = createSlice({
    name: 'product',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        updateCheckedProducts:(state, action: PayloadAction<IProduct>)=>{
            // state.value=state.value.map(product => product.id == action.payload.id ? {...product, qty: action.payload.qty} : product)
            state.value = action.payload;
        }


    },
})

export const {updateCheckedProducts} = templateProductSlice.actions
// Other code such as selectors can use the imported `RootState` type
export const productState = (state: RootState) => state.products

export default templateProductSlice.reducer