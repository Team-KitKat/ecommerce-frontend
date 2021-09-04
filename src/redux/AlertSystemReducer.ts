import {alertSystem, IAlertSystem} from "./Interfaces/inteface";
import {ALERT_SYSTEM_SHOW} from "./constants/CheckoutConstants";

const initialState: StoreType = {
    alertItem:[]
}

interface  StoreType {
    alertItem: IAlertSystem []
}


export const AlertItemsReducer = (state:StoreType = initialState, action: alertSystem) => {
    switch (action.type) {
        case ALERT_SYSTEM_SHOW:{
            return{
                ...state,
                alertItem:[action.payload]
            }
        }
        default:{
            return state;
        }

    }
}