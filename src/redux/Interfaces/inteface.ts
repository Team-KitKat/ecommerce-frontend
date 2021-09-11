import {
    ADD_FAV_POST_ITEM, ALERT_SYSTEM_SHOW, DELETE_FAV_POST_ITEM,
    UPDATE_TEMP_POST_ITEM
} from "../constants/CheckoutConstants";
import {IProduct} from "../../types/MainTypes";

export interface updateTempPostItem {
    type: typeof UPDATE_TEMP_POST_ITEM
    payload: IProduct
}

export interface IloginDetails {
    sellerVerified: string
    _id: string
    name: string
    email: string
    password: string
    location: string
    user_mobile: string
    iat: number
    exp: number
    role: string
}

export interface IAlertSystem{
    isShow: boolean
    type: string
    message:string
    title:string
}
export interface alertSystem {
    type: typeof ALERT_SYSTEM_SHOW
    payload: IAlertSystem
}