import {IProduct} from "../types/MainTypes";
import {updateTempPostItem} from "./Interfaces/inteface";
import {UPDATE_TEMP_POST_ITEM} from "./constants/CheckoutConstants";
import {RootState} from "./store";
import {productSlice} from "./productSlice";


const initialState: StoreType = {
    tempPostItem:[
        {
            id: 100,
            image: "",
            name: "",
            category: "",
            qty: 20,
            price: 10,
            discount: 10,
            total: 10
        }
    ]
}

interface  StoreType {
    tempPostItem: IProduct []
}


export const TempPostItemReducer = (state:StoreType = initialState, action: updateTempPostItem) => {
    switch (action.type) {
        case UPDATE_TEMP_POST_ITEM:{
            return{
                ...state,
                tempPostItem:[action.payload]
            }
        }
        default:{
            return state;
        }

    }
}

