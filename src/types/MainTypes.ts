export interface IProduct {
    name: string
    price: number
    qty: number | 1
    discount: number
    image: string
    id: string
    total: number
}

export interface IOrder {
    productList: IProduct[] | null
    discount: number
    netTotal: number
    deliveryCharge: number
    id: string
}