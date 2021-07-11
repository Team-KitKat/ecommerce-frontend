import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './store'
import {IProduct} from "../types/MainTypes";

// Define a type for the slice state
interface ProductState {
    value: IProduct[]
}

// Define the initial state using that type
const initialState: ProductState = {
    value: [
        {
        id: "1",
        image: "https://store-images-soft.s3.us-east-2.amazonaws.com/avacado.jpg",
        name: "Avacado",
        category: "grocery",
        qty: 1,
        price: 300,
        discount: 20,
        total: 300
    },
        {
            id: "2",
            image: "https://store-images-soft.s3.us-east-2.amazonaws.com/avacado.jpg",
            name: "Avacado Large",
            category: "grocery",
            qty: 1,
            price: 350,
            discount: 25,
            total: 350
        },
        {
            id: "3",
            image: "https://store-images-soft.s3.us-east-2.amazonaws.com/avacado.jpg",
            name: "Avacado",
            category: "grocery",
            qty: 1,
            price: 300,
            discount: 20,
            total: 300
        },

        ]

}

export const productSlice = createSlice({
    name: 'products',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        add: (state, action: PayloadAction<IProduct>) => {
            const newProduct = {
                id: action.payload.id,
                image: action.payload.image,
                name: action.payload.name,
                category: action.payload.category,
                qty: action.payload.qty,
                price: action.payload.price,
                discount: action.payload.discount,
                total: action.payload.total
            }
            state.value.push(newProduct);
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