import {updateTempPostItem} from "./Interfaces/inteface";
import {UPDATE_TEMP_POST_ITEM} from "./constants/CheckoutConstants";
import {IProduct} from "../types/MainTypes";

export const updateTempPost = (postItem: IProduct): updateTempPostItem => {
    return {
        type: UPDATE_TEMP_POST_ITEM,
        payload: postItem
    }
}


