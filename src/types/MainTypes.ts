export interface IProduct {
    id: string
    image: string
    name: string
    qty: number | 1
    price: number
    discount: number
    total: number
}

export interface IOrder {
    productList: IProduct[] | null
    discount: number
    netTotal: number
    deliveryCharge: number
    id: string
}