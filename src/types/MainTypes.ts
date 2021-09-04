export interface IProduct {
    id: number
    image: string
    name: string
    category: string
    qty: number | 1
    price: number
    discount: number
    total: number
    isUpdate: boolean
}

export interface IOrder {
    id: string
    productList: IProduct[] | null
    totalPrice: number
    discount: number
    netTotal: number
    deliveryCharge: number

}

export interface IFormGroup {
    name: string
    label: string
    type: string
    error: string | null
    value: string
}

export interface INavItem {
    title : string,
    route : string,
    icon: string,
    subNav: INavItem [] | null
}

export  interface  IOption {
    label: string
    value: string
}

