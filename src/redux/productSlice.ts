import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './store'
import {IProduct} from "../types/MainTypes";

// Define a type for the slice state
interface ProductState {
    value: IProduct[]
}

// Define the initial state using that type
const initialState: ProductState = {
    value: []
}

export const productSlice = createSlice({
    name: 'product',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        add: (state, action: PayloadAction<IProduct>) => {
            const newProduct = {
                id: action.payload._id,
                image: action.payload.image,
                name: action.payload.name,
                category: action.payload.category,
                qty: action.payload.qty,
                price: action.payload.price,
                discount: action.payload.discount,
                total: action.payload.total
            }
            //state.push(newProduct);
        },
        updateProducts:(state, action: PayloadAction<IProduct[]>)=>{
            /*const newProducts: IProduct[] = state.value.slice();
            newAuthorList.splice(index - 1, 1, updatedAuthor);*/
            state.value=action.payload;
        }

    },
})

export const {add,updateProducts} = productSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const productState = (state: RootState) => state.products

export default productSlice.reducer